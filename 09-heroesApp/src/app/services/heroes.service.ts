import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://heroesapp-1f6dc.firebaseio.com';

  constructor(private httpClient: HttpClient) { }

  crearHeroe(heroe: HeroeModel) {
    return this.httpClient.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    )
  }

  actualizarHeroe(heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;

    return this.httpClient.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes() {
    return this.httpClient.get(`${this.url}/heroes.json`)
      .pipe(
        map(this.crearArreglo)
      );
  }

  getHeroeById(id: string) {
    return this.httpClient.get(`${this.url}/heroes/${id}.json`);
  }

  borrarHeroe(id: string) {
    return this.httpClient.delete(`${this.url}/heroes/${id}.json`);
  }

  private crearArreglo(heroesObj: object) {

    if (heroesObj === null) {
      return [];
    }

    const heroes: HeroeModel[] = [];
    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }

}

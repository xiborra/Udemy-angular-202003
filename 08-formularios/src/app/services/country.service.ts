import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  findCountries() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
      .pipe(
        map((resp: any[]) =>
          resp.map(pais =>
            ({
              nombre: pais.name,
              codigo: pais.alpha3Code
            })
          )
        )
      );
  }

}

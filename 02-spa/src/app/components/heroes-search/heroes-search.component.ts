import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html'
})
export class HeroesSearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      if (this.termino !== '') {
        this.heroes = this.heroesService.buscarHeroes(this.termino);
      }
    });
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  buscarHeroe(termino: string) {
    this.router.navigate(['/heroe-search', termino]);
  }

}

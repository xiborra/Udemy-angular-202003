import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent {

  alerta = 'alert-danger';
  loading = false;
  propiedades = {
    danger: false
  };

  constructor() { }

  ejecutar() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }


}

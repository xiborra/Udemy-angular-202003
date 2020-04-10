import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitan America';
  nombre2 = 'xaViEr iBoRRA sanCheZ';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 12345.6;
  fecha = new Date();
  activar = true;

  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/kOouTy4RbBA';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Calle falsa',
      numero: '123'
    }
  }

}

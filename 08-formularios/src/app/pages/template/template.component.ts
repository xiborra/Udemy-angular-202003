import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Xavier',
    apellido: 'Iborra',
    email: 'xavi.iborra.95@gmail.com',
    pais: 'CRI',
    genero: 'M'
  };

  paises: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.findCountries().subscribe(paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[ Seleccione pais ]',
        codigo: ''
      });
    });
  }

  guardar(templateForm: NgForm) {

    if (templateForm.invalid) {

      Object.values(templateForm.controls).forEach(control => {
        control.markAsTouched();
      });

      return;
    }

    console.log(templateForm);
    console.log(templateForm.value);
  }

}

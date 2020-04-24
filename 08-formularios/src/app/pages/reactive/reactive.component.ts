import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private validatorService: ValidadoresService) {
    this.crearFormulario();
    this.loadFormData();
    this.createListeners();
  }

  ngOnInit(): void {
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  borrarElemento(index: number) {
    this.pasatiempos.removeAt(index);
  }

  guardar() {
    if (this.forma.invalid) {

      return Object.values(this.forma.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(controlChild => controlChild.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });

    }

    // Posteo de informacion
    this.forma.reset({
      nombre: 'Sin nombre'
    });
    console.log(this.forma);
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }

  get distritoNoValido() {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValido() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get pass1NoValido() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return (pass1 === pass2) ? false : true;
  }

  private crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validatorService.noHerrera]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', , this.validatorService.existeUsuario],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validatorService.passwordsIguales('pass1', 'pass2')
    });
  }

  private loadFormData() {
    // this.forma.setValue({
    this.forma.reset({
      nombre: 'Xavier',
      apellido: 'Iborra',
      correo: 'xavi@gmail.com',
      pass1: '123',
      pass2: '123',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Ottawa'
      }
    });

    ['Comer', 'Dormir'].forEach(
        valor => this.pasatiempos.push(
          this.formBuilder.control(valor)));
  }

  private createListeners() {
    // this.forma.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // });

    this.forma.get('nombre').valueChanges.subscribe(console.log);

    // this.forma.statusChanges.subscribe( status => {
    //   console.log(status);
    // });
  }

}

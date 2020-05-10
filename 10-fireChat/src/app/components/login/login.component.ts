import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  ingresar(proveedor: string) {
    console.log(proveedor);

    this.authService.login(proveedor);
  }

}

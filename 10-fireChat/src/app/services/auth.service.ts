import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: any = {};

  constructor(private authService: AngularFireAuth) {
    this.authService.authState.subscribe( user => {
      console.log(user);
      if (user == null) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
   }

  login(proveedor: string) {
    this.authService.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.usuario = {};
    this.authService.auth.signOut();
  }
}

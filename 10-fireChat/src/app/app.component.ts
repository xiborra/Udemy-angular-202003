import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
              public authService: AuthService) {
    this.items = firestore.collection('chats').valueChanges();
  }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from '../../interfaces/mensaje.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje = '';
  chats: Mensaje[] = [];
  elemento: any;

  constructor(public chatService: ChatService,
              public authService: AuthService) {
    this.chatService.cargarMensajes()
      .subscribe((resp: Mensaje[]) =>  {
        this.chats = resp;

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this.chatService.agregarMensaje(this.mensaje)
      .then(() => {
        console.log('Mensaje enviado');
        this.mensaje = '';
      }).catch((err) => {
        console.log('Error al enviar', err);
      });

  }



}

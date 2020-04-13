import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { USER_ROUTES } from './components/usuario/usuario.routes';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id', 
        component: UsuarioComponent,
        children: USER_ROUTES
     },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
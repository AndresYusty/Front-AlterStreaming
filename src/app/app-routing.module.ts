import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';

const routes: Routes = [
  {path:'', component: LoginComponent}, //cuando no escriba nada = va a redirigir al componente de login
  {path:'login', component: LoginComponent},
  {path: 'contenido', component:ContenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

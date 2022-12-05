import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerRegisterComponent } from './components/container-register/container-register.component'
import { ContainerLoginComponent } from './components/container-login/container-login.component'

import { LoginComponent } from './components/login/login.component';
import { PrincipalContainerComponent } from './components/principal-container/principal-container.component';
import { ContainerMapComponent } from './components/container-map/container-map.component';
import { ContainerUsuarioComponent } from './components/container-usuario/container-usuario.component';
import { ContainerRegisterUsuarioComponent } from './components/container-register-usuario/container-register-usuario.component';

const routes: Routes = [
  { path: '', component: ContainerRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: ContainerMapComponent },
  { path: 'usuarios', component: ContainerUsuarioComponent },
  { path: 'usuarioRegister', component: ContainerRegisterUsuarioComponent },
  {path: '**', component:PrincipalContainerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


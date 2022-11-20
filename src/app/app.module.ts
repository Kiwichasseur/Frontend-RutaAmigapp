import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PrincipalContainerComponent } from './components/principal-container/principal-container.component';
import { RegisterComponent } from './components/register/register.component';
import { MyBtnPrimaryComponent } from './components/my-btn-primary/my-btn-primary.component';
import { ContainerRegisterComponent } from './components/container-register/container-register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ContainerLoginComponent } from './components/container-login/container-login.component';
import { MapComponent } from './components/map/map.component';
import { ContainerMapComponent } from './components/container-map/container-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalContainerComponent,
    RegisterComponent,
    MyBtnPrimaryComponent,
    ContainerRegisterComponent,
    LoginComponent,
    ContainerLoginComponent,
    MapComponent,
    ContainerMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

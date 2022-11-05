import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PrincipalContainerComponent } from './components/principal-container/principal-container.component';
import { RegisterComponent } from './components/register/register.component';
import { MyBtnPrimaryComponent } from './components/my-btn-primary/my-btn-primary.component';
import { ContainerRegisterComponent } from './components/container-register/container-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrincipalContainerComponent,
    RegisterComponent,
    MyBtnPrimaryComponent,
    ContainerRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppInterceptor } from './app-interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistroDepartamentoComponent } from './registro-departamento/registro-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroDepartamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

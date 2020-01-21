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
import { GlobalService } from './service/global.service';
import { AuthGuard } from './service/auth.guard';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
      multi: true,
      deps: [GlobalService, Router]
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

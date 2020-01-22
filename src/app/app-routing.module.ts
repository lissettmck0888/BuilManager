import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MainResolverService } from './main/main-resolver.service';
import { AuthGuard } from './service/auth.guard';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    resolve: {resolverData: MainResolverService},
    canActivate: [AuthGuard],
    children: [
      {
        path: '', loadChildren: './main/main.module#MainModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule} from '../main/main-routing.module'
import { MainComponent } from './main.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RolesComponent } from '../roles/roles.component';
import { AgregarUsuarioComponent } from '../usuarios/agregar-usuario/agregar-usuario.component';
import { AgregarRolComponent } from '../roles/agregar-rol/agregar-rol.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PermitidoDirective } from '../directive/permitido.directive';


@NgModule({
  declarations: [
    MainComponent,
    UsuariosComponent,
    RolesComponent,
    AgregarUsuarioComponent,
    AgregarRolComponent,
    PermitidoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    AngularDualListBoxModule
  ]
})
export class MainModule { }

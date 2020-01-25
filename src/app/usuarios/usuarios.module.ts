import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';



@NgModule({
  declarations: [UsuariosComponent, ListaComponent, AgregarUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ],
})
export class UsuariosModule { }

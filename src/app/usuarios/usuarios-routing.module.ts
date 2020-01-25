import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { ListaComponent } from './lista/lista.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';

const routes = [
    {
        path: '',
        component: UsuariosComponent,
        children: [
            {path:'all', component: ListaComponent },
            {path:'agregar', component: AgregarUsuarioComponent },
            {path:'', redirectTo: 'all' }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {

}
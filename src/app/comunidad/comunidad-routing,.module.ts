import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComunidadComponent } from './comunidad.component';
import { ListaAsignacionesComponent } from './lista-asignaciones/lista-asignaciones.component';
import { AsignacionUnidadesComponent } from './asignacion-unidades/asignacion-unidades.component';
import { AgregarPersonaComponent } from './agregar-persona/agregar-persona.component';
import { PersonasComponent } from './personas/personas.component';

const routes = [
    {
        path: '',
        component: ComunidadComponent,
        children: [
            {path:'all', component: ListaAsignacionesComponent },
            {path:'asignacion-unidades', component: AsignacionUnidadesComponent },
            {path:'personas', component: PersonasComponent },
            {path:'agregar-persona', component: AgregarPersonaComponent },
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
export class ComunidadRoutingModule {

}
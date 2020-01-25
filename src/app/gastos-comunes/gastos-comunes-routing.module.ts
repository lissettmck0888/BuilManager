import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GastosComunesComponent } from './gastos-comunes.component';
import { HomeGastosComponent } from './home-gastos/home-gastos.component';
import { ConsolidarGastosComponent } from './consolidar-gastos/consolidar-gastos.component';
import { ResumenCobroIndividualComponent } from './resumen-cobro-individual/resumen-cobro-individual.component';
import { DetalleIndividualResolver } from '../service/detalle-individual-resolver.service';
import { HomeResolverService } from '../service/home-resolver.service';
import { ConsolidarGastosResolverService } from '../service/consolidar-gastos-resolver.service';

const routes = [
    {
        path: '',
        component: GastosComunesComponent,
        children: [
            {path:'actual', component: HomeGastosComponent, resolve: {resolverData: HomeResolverService} },
            {path:'consolidar', component: ConsolidarGastosComponent, resolve: {resolverData: ConsolidarGastosResolverService} },
            {path:'resumen', component: ResumenCobroIndividualComponent, resolve: {data: DetalleIndividualResolver}, },
            {path:'', redirectTo: 'actual' }
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
export class GastosComunesRoutingModule {

}
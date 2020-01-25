import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule} from '../main/main-routing.module'
import { MainComponent } from './main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PermitidoDirective } from '../directive/permitido.directive';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {DataTableModule} from "angular-6-datatable";
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    MainComponent,
    PermitidoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    AutocompleteLibModule,
    DataTableModule,
    AngularFontAwesomeModule
  ]
})
export class MainModule { }

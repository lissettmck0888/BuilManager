import { Component, OnInit } from '@angular/core';
import { UnidadService } from '../service/unidad.Service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-departamento',
  templateUrl: './registro-departamento.component.html',
  styleUrls: ['./registro-departamento.component.css']
})
export class RegistroDepartamentoComponent implements OnInit {

  public unidadesDisponibles : any[];
  public unidadesSeleccionadas : any[] = [];
  public formAsignacion: FormGroup;

  constructor(
    private unidadService: UnidadService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {

    this.formAsignacion = this.formBuilder.group({
      unidadesSeleccionadas: []
    });

    this.unidadService.getUnidadesDisponibles().subscribe(data=>{
      this.unidadesDisponibles=data ;
    });
    
  }
  
  agregarUnidades() {
    const seleccionados: any[] = this.formAsignacion.controls.unidadesSeleccionadas.value;
    console.log(seleccionados);
    
    this.unidadesSeleccionadas = this.unidadesSeleccionadas.concat(seleccionados);

    
    this.unidadesDisponibles = this.unidadesDisponibles.filter(unidad=> {
      return !this.unidadesSeleccionadas.includes(unidad);
    });

  }



}

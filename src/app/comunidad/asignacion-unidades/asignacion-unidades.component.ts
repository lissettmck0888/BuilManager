import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { Asignacion } from 'src/app/model/asignacion.model';
import { PersonaService } from 'src/app/service/persona.service';
import { UnidadService } from 'src/app/service/unidad.Service';
import { AsignacionService } from 'src/app/service/asignacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignacion-unidades',
  templateUrl: './asignacion-unidades.component.html',
  styleUrls: ['./asignacion-unidades.component.css']
})
export class AsignacionUnidadesComponent implements OnInit {

  tipoAsignacionList: any[] = [
    { cod: 'propietario', alias: 'Propietario' },
    { cod: 'arriendo', alias: 'Arriendo' }
  ];

  estadoAsignacionList: any[] = [
    { cod: 'habitado', alias: 'Habitado' },
    { cod: 'vacio', alias: 'Desocupado' }
  ];

  public unidadesDisponibles: any[];
  //public unidadesSeleccionadas : any[] = [];
  public formAsignacion: FormGroup;

  keyword = 'name';
  data = [];

  private personas: Persona[];

  public nuevaAsignacion: Asignacion = new Asignacion();

  constructor(
    private personaService: PersonaService,
    private unidadService: UnidadService,
    private asignacionService: AsignacionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {

    this.formAsignacion = this.formBuilder.group({
      idPersona: [],
      tipoAsignacion: [],
      estadoAsignacion: [],
      unidadesSeleccionadas: []
    });

    this.formAsignacion.controls.tipoAsignacion.valueChanges.subscribe(val => {
      this.nuevaAsignacion.tipoAsignacion = val;
      this.loadUnidades();
    });
    this.formAsignacion.controls.estadoAsignacion.valueChanges.subscribe(val => this.nuevaAsignacion.estado = val);


  }

  private loadUnidades() {
    this.unidadesDisponibles = [];
    if (this.nuevaAsignacion.tipoAsignacion === 'propietario') {
      this.unidadService.getUnidadesSinAsignacion().subscribe(data => {
        this.unidadesDisponibles = data;
      });
    } else if (this.nuevaAsignacion.tipoAsignacion === 'arriendo') {

      this.unidadService.getUnidadesParaArriendo().subscribe(data => {
        this.unidadesDisponibles = data;
      });
    }
  }

  guardar() {
    this.asignacionService.guardarAsignacion(this.nuevaAsignacion).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/main/comunidad']);
    });
  }

  agregarUnidades() {
    const seleccionados: any[] = this.formAsignacion.controls.unidadesSeleccionadas.value;
    console.log(seleccionados);

    this.nuevaAsignacion.unidades = this.nuevaAsignacion.unidades.concat(seleccionados);

    this.unidadesDisponibles = this.unidadesDisponibles.filter(unidad => {
      return !this.nuevaAsignacion.unidades.includes(unidad);
    });

  }

  quitar(idUnidad: number) {
    const unidad: any = this.nuevaAsignacion.unidades.find(u => u.idUnidad === idUnidad);
    const idx = this.nuevaAsignacion.unidades.indexOf(unidad);
    console.log(idx);
    this.nuevaAsignacion.unidades.splice(idx, 1);
    this.unidadesDisponibles.push(unidad);
    this.unidadesDisponibles = this.unidadesDisponibles.sort((a, b) => {
      if (a.idUnidad > b.idUnidad) return 1;
      if (a.idUnidad < b.idUnidad) return -1;
      return 0;
    });
  }


  selectEvent(item) {
    // do something with selected item
    console.log('item');
    console.log(item);
    const s: string = '';
    let run: string = item.name.substring(0, item.name.indexOf(' - '));
    console.log('run');
    console.log(run);
    const persona: Persona = this.personas.find(persona => persona.run === run);
    this.nuevaAsignacion.persona = persona;
    console.log('this.nuevaAsignacion');
    console.log(this.nuevaAsignacion);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.personaService.getByFilter(val).subscribe((data: any[]) => {
      console.log(data);
      this.personas = data;
      let aux: any[] = [];
      data.forEach(persona => {
        aux.push({ "name": persona.run + ' - ' + persona.nombres + ' ' + persona.apellidoPaterno + ' ' + persona.apellidoMaterno });
      });
      this.data = aux;
    });

  }

  onFocused(e) {
    // do something when input is focused
  }

}

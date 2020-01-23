import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { Asignacion } from 'src/app/model/asignacion.model';
import { PersonaService } from 'src/app/service/persona.service';
import { UnidadService } from 'src/app/service/unidad.Service';
import { AsignacionService } from 'src/app/service/asignacion.service';
import { Router } from '@angular/router';
import { AsignacionUnidad } from 'src/app/model/asignacion-unidad.model';
import { Unidad } from 'src/app/model/unidad.model';

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
  public formAsignacion: FormGroup;

  keyword = 'name';
  data = [];

  private personas: Persona[];
  public nuevaAsignacion: Asignacion = new Asignacion();
  public unidadCopropietarioYaSeleccionada: boolean;

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
      this.unidadService.getUnidadesSinAsignacionUnidadCopropiedad().subscribe(data => {
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

  agregarUnidadCopropiedad() {
    const unidadSeleccionada: Unidad = this.formAsignacion.controls.unidadesSeleccionadas.value;
    console.log(unidadSeleccionada);

    let asignacionUnidad: AsignacionUnidad = new AsignacionUnidad();
    asignacionUnidad.unidad = unidadSeleccionada;
    asignacionUnidad.unidadCopropiedad = unidadSeleccionada.tipoUnidad.idTipoUnidad === 1;
    this.nuevaAsignacion.asignacionUnidades.push(asignacionUnidad);

    this.unidadCopropietarioYaSeleccionada = true;
  }
  
  quitarUnidadCopropiedad(asignacionUnidad: AsignacionUnidad) {
    const idx = this.nuevaAsignacion.asignacionUnidades.indexOf(asignacionUnidad);
    console.log(idx);
    this.nuevaAsignacion.asignacionUnidades = this.nuevaAsignacion.asignacionUnidades.filter(a=>!(a.unidad.idUnidad === asignacionUnidad.unidad.idUnidad));
    this.unidadCopropietarioYaSeleccionada = false;
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

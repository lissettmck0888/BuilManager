import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

  public unidadesCopropiedadDisponibles: any[];
  public unidadesDisponibles: any[];
  public formAsignacion: FormGroup;

  formConErrores: boolean;

  @ViewChild('auto', {static: false}) auto;
  
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
      idPersona: new FormControl(null, Validators.required),
      tipoAsignacion: new FormControl(null, Validators.required),
      estadoAsignacion: new FormControl(null, Validators.required),
      unidadCopropiedadSeleccionada: new FormControl(null, Validators.required),
      unidadesSeleccionadas: new FormControl([])
    });

    this.formAsignacion.controls.tipoAsignacion.valueChanges.subscribe(val => {
      this.nuevaAsignacion.assignmentType = val;
      this.loadUnidadesCopropiedad();
    });
    this.formAsignacion.controls.estadoAsignacion.valueChanges.subscribe(val => this.nuevaAsignacion.state = val);

  }

  private loadUnidadesCopropiedad() {
    this.unidadesCopropiedadDisponibles = [];
    if (this.nuevaAsignacion.assignmentType === 'propietario') {
      this.unidadService.getUnidadesSinAsignacionUnidadCopropiedad().subscribe(data => {
        this.unidadesCopropiedadDisponibles = data;
      });
    } else if (this.nuevaAsignacion.assignmentType === 'arriendo') {

      this.unidadService.getUnidadesParaArriendo().subscribe(data => {
        this.unidadesCopropiedadDisponibles = data;
      });
    }
  }

  private loadPropiedades() {
    this.unidadService.getUnidadesSinAsignacion().subscribe(data => {
      this.unidadesDisponibles = data;
    });
  }

  guardar() {
    this.asignacionService.guardarAsignacion(this.nuevaAsignacion).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/main/comunidad']);
    });
  }

  agregarUnidadCopropiedad() {
    console.log(this.formAsignacion.value);
    if(this.formAsignacion.valid){
      const unidadSeleccionada: Unidad = this.formAsignacion.controls.unidadCopropiedadSeleccionada.value;
      console.log(unidadSeleccionada);
  
      let asignacionUnidad: AsignacionUnidad = new AsignacionUnidad();
      asignacionUnidad.propertyDto = unidadSeleccionada;
      asignacionUnidad.mainProperty = unidadSeleccionada.type === 'Departamento';
      this.nuevaAsignacion.assignmentPropertyList.push(asignacionUnidad);
  
      this.loadPropiedades();
      this.unidadCopropietarioYaSeleccionada = true;
      this.formConErrores = false;
    }else{
      this.formConErrores = true;
    }

  }

  agregarUnidadesAdicionales() {
    const unidadesSeleccionadas: Unidad[] = this.formAsignacion.controls.unidadesSeleccionadas.value;
    console.log(unidadesSeleccionadas);

    unidadesSeleccionadas.forEach(u=>{
      let asignacionUnidad: AsignacionUnidad = new AsignacionUnidad();
      asignacionUnidad.propertyDto = u;
      asignacionUnidad.mainProperty = u.type === 'Departamento';
      this.nuevaAsignacion.assignmentPropertyList.push(asignacionUnidad);
    });
    
  }
  
  quitarUnidad(asignacionUnidad: AsignacionUnidad) {
    const idx = this.nuevaAsignacion.assignmentPropertyList.indexOf(asignacionUnidad);
    console.log(idx);
    this.nuevaAsignacion.assignmentPropertyList = this.nuevaAsignacion.assignmentPropertyList.filter(a=>!(a.propertyDto.id === asignacionUnidad.propertyDto.id));
    
    if(asignacionUnidad.mainProperty){
      this.unidadCopropietarioYaSeleccionada = false;
      this.nuevaAsignacion.assignmentPropertyList = [];
      this.formAsignacion.reset();
      this.formConErrores = false;
      //this.auto.close();
    }
  }


  selectEvent(item) {
    // do something with selected item
    console.log('item');
    console.log(item);
    const s: string = '';
    let run: string = item.name.substring(0, item.name.indexOf(' - '));
    console.log('run');
    console.log(run);
    const persona: Persona = this.personas.find(persona => persona.rut === run);
    this.nuevaAsignacion.guestId = persona.id;
    this.formAsignacion.controls.idPersona.setValue(persona.id);
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
        aux.push({ "name": persona.rut + ' - ' + persona.name + ' ' + persona.lastNameP + ' ' + persona.lastNameM });
      });
      this.data = aux;
    });

  }

  onFocused(e) {
    // do something when input is focused
  }

}

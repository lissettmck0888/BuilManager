import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemGastoComun } from 'src/app/model/item-gasto-comun.model';
import { GastoComun } from 'src/app/model/gasto-comun.model';
import { DetalleGastoComun } from 'src/app/model/detalle-gasto-comun.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GastoComunService } from 'src/app/service/gasto-comun.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-gastos',
  templateUrl: './home-gastos.component.html',
  styleUrls: ['./home-gastos.component.css']
})
export class HomeGastosComponent implements OnInit {

  keyword = 'nombre';

  public items: ItemGastoComun[];
  public gastoComun: GastoComun;
  public listaDetalle: DetalleGastoComun[];
  private selectedItem: ItemGastoComun;
  public addGastoMode: boolean;

  formItemGasto: FormGroup;
  formConErrores: boolean;

  constructor(
    private gastoComunService: GastoComunService,
    private fb: FormBuilder,
    //private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.formItemGasto = this.fb.group({
      item: new FormControl(null, Validators.required),
      monto: new FormControl(null, Validators.required)
    });

    // TODO mover a resolver

    this.activatedRoute.data.subscribe(data => {
      console.log('data resolver');
      console.log(data);
      this.gastoComun = data.resolverData.gastoComun;
      this.listaDetalle = this.gastoComun.listaDetalleGastoComun;
      this.items = data.resolverData.items;
      //this.cdr.detectChanges();

    });
    /* this.gastoComunService.getGastoComunAbierto().subscribe(data => {
      this.gastoComun = data;

      this.gastoComunService.getItems().subscribe((items: ItemGastoComun[]) => {
      });
    }); */
  }

  public eliminarItemGasto(idDetalle: number) {
    this.gastoComun.listaDetalleGastoComun = this.gastoComun.listaDetalleGastoComun.filter(detalle=>detalle.idDetalleGastoComun!==idDetalle);
    this.actualizarGastoComun();
  }
  
  public agregarItemGasto() {
    let detalle: DetalleGastoComun = new DetalleGastoComun();
    detalle.gastoComun = this.gastoComun.idGastoComun;
    if(this.formItemGasto.valid) {
      
      if(!this.selectedItem) {
        this.selectedItem = new ItemGastoComun();
        this.selectedItem.nombre = this.formItemGasto.controls.item.value;
        this.selectedItem.tipo = 'extraordinario';
      }
      detalle.itemGastoComun = this.selectedItem;
      detalle.monto = this.formItemGasto.controls.monto.value;
      this.gastoComun.listaDetalleGastoComun.push(detalle);
      this.actualizarGastoComun();
      this.toggleAgregarGasto();
      this.formItemGasto.reset();
      this.formConErrores = false;
    }else {
      this.formConErrores = true;
    }
  }
  
  private actualizarGastoComun() {
    this.gastoComunService.actualizarGastoComun(this.gastoComun).subscribe(resp=>{
      console.log(resp);
      this.gastoComun = resp;
      this.listaDetalle = this.gastoComun.listaDetalleGastoComun;
      this.selectedItem = null;
      this.gastoComunService.getItems().subscribe(items=>this.items = items);
    });
  }

  public toggleAgregarGasto() {
    this.addGastoMode = !this.addGastoMode;
    this.formConErrores=false;
  }

  public agregarItemCobro(){
    

    this.selectedItem = null;
  }

  selectEvent(item) {
    // do something with selected item
    console.log('item');
    console.log(item);
    this.selectedItem = <ItemGastoComun>item;
    this.formItemGasto.controls.item.setValue(this.selectedItem.nombre);
  }
  
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log('val');
    console.log(val);
    this.formItemGasto.controls.item.setValue(val);
  }

  onFocused(e) {
    // do something when input is focused
  }
}

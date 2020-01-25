import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ItemGastoComun } from 'src/app/model/item-gasto-comun.model';
import { GastoComun } from 'src/app/model/gasto-comun.model';
import { DetalleGastoComun } from 'src/app/model/detalle-gasto-comun.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GastoComunService } from 'src/app/service/gasto-comun.service';

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

  constructor(
    private gastoComunService: GastoComunService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.formItemGasto = this.fb.group({
      item: new FormControl(''),
      monto: new FormControl(0)
    });

    // TODO mover a resolver
    this.gastoComunService.getGastoComunAbierto().subscribe(data => {
      this.gastoComun = data;
      this.listaDetalle = this.gastoComun.listaDetalleGastoComun;

      this.gastoComunService.getItems().subscribe((items: ItemGastoComun[]) => {
        this.items = items;
        this.cdr.detectChanges();
      });
    });
  }

  public eliminarItemGasto(idDetalle: number) {
    this.gastoComun.listaDetalleGastoComun = this.gastoComun.listaDetalleGastoComun.filter(detalle=>detalle.idDetalleGastoComun!==idDetalle);
    this.actualizarGastoComun();
  }
  
  public agregarItemGasto() {
    let detalle: DetalleGastoComun = new DetalleGastoComun();
    detalle.gastoComun = this.gastoComun.idGastoComun;
    if(!this.selectedItem) {
      this.selectedItem = new ItemGastoComun();
      this.selectedItem.nombre = this.formItemGasto.controls.item.value;
    }
    detalle.itemGastoComun = this.selectedItem;
    detalle.monto = this.formItemGasto.controls.monto.value;
    this.gastoComun.listaDetalleGastoComun.push(detalle);
    this.actualizarGastoComun();
    this.toggleAgregarGasto();
    this.formItemGasto.controls.item.reset();
  }
  
  private actualizarGastoComun() {
    this.gastoComunService.actualizarGastoComun(this.gastoComun).subscribe(resp=>{
      console.log(resp);
      this.gastoComun = resp;
      this.listaDetalle = this.gastoComun.listaDetalleGastoComun;
      this.selectedItem = null;
    });
  }

  public toggleAgregarGasto() {
    this.addGastoMode = !this.addGastoMode;
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
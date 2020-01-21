import { Component, OnInit } from '@angular/core';
import { GastoComunService } from '../service/gasto-comun.service';
import { ItemGastoComun } from '../model/item-gasto-comun.model';
import { GastoComun } from '../model/gasto-comun.model';
import { DetalleGastoComun } from '../model/detalle-gasto-comun.model';

@Component({
  selector: 'app-gastos-comunes',
  templateUrl: './gastos-comunes.component.html',
  styleUrls: ['./gastos-comunes.component.css']
})
export class GastosComunesComponent implements OnInit {

  keyword = 'nombre';

  public items: ItemGastoComun[];
  public gastoComun: GastoComun;
  private selectedItem: ItemGastoComun;

  public addGastoMode: boolean;

  constructor(
    private gastoComunService: GastoComunService
  ) { }

  ngOnInit() {

    this.gastoComunService.getGastoComunAbierto().subscribe(data => {
      
      console.log('data gastoComunAbierto');
      console.log(data);
      this.gastoComun = data;

      this.gastoComunService.getItems().subscribe((items: ItemGastoComun[]) => {
        console.log('items');
        console.log(items);
        this.items = items;
      });
    });
  }

  public actualizarGastoComun() {
    let detalle: DetalleGastoComun = new DetalleGastoComun();
    detalle.gastoComun = this.gastoComun;//TODO FIX THIS
    detalle.itemGastoComun = this.selectedItem;
    detalle.monto = 1000;
    this.gastoComun.listaDetalleGastoComun.push(detalle);
    this.gastoComunService.actualizarGastoComun(this.gastoComun).subscribe(resp=>{
      console.log(resp);
      this.selectedItem = null;
    });
  }

  public toggleAgregarGasto() {
    this.addGastoMode = !this.addGastoMode;
  }

  public agregarItemCobro(){
    if(!this.selectedItem) {
      this.selectedItem = new ItemGastoComun();
      this.selectedItem.nombre = 'pasar valor autocomplete';
    }

    //this.gastoComunService
    this.selectedItem = null;
  }

  selectEvent(item) {
    // do something with selected item
    console.log('item');
    console.log(item);
    this.selectedItem = <ItemGastoComun>item;
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.

  }

  onFocused(e) {
    // do something when input is focused
  }

}

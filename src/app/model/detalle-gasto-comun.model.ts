import { GastoComun } from './gasto-comun.model';
import { ItemGastoComun } from './item-gasto-comun.model';

export class DetalleGastoComun {

    public idDetalleGastoComun: number;
    public monto: number;
    public gastoComun: GastoComun;
    public itemGastoComun: ItemGastoComun;

}
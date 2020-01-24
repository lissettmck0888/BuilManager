import { GastoComun } from './gasto-comun.model';
import { ItemGastoComun } from './item-gasto-comun.model';

export class DetalleGastoComun {

    public idDetalleGastoComun: number;
    public monto: number;
    public montoAnterior: number;
    public montoTotal: number;
    public gastoComun: number;
    public itemGastoComun: ItemGastoComun;

}
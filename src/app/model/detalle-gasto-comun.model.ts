import { GastoComun } from './gasto-comun.model';
import { ItemGastoComun } from './item-gasto-comun.model';

export class DetalleGastoComun {

    /* public idDetalleGastoComun: number;
    public monto: number;
    public montoAnterior: number;
    public montoTotal: number;
    public gastoComun: number;
    public itemGastoComun: ItemGastoComun; */

    public id: number;
    public name: string;
    public description: string;
    public type: string;
    public amount: number;

}
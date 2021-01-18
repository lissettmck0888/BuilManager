import { DetalleGastoComun } from './detalle-gasto-comun.model';
import { ItemGastoComun } from './item-gasto-comun.model';

export class GastoComun {

    public id: number;
    public state: string;
    public totalAmount: number;
    public period: string;
    public expenseItemList: DetalleGastoComun[];

}
import { DetalleGastoComun } from './detalle-gasto-comun.model';

export class GastoComun {

    public idGastoComun: number;
    public estado: string;
    public montoTotal: number;
    public periodo: string;
    public listaDetalleGastoComun: DetalleGastoComun[];

}
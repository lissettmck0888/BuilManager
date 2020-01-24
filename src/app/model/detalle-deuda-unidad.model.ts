import { GastoComun } from './gasto-comun.model';
import { Unidad } from './unidad.model';

export class DetalleDeudaUnidad {

    
    public idDetalleDeudaUnidad: number;
    public monto: number;
    public montoAnterior: number;
    public montoTotal: number;
    public factorProrrateo: number;
    public estado: string;
    public fechaPago: string;
    public unidad: Unidad;
    public gastoComun: GastoComun;
}
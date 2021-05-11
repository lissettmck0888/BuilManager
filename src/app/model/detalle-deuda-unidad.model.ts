import { Asignacion } from './asignacion.model';
import { GastoComun } from './gasto-comun.model';
import { Unidad } from './unidad.model';

export class DetalleDeudaUnidad {

    
    public id: number;
    public responsable: string;
    public monto: number;
    public montoAnterior: number;
    public montoTotal: number;
    public abonos: number;
    public saldo: number;
    public factorProrrateo: number;
    public estado: string;
    public fechaPago: string;
    public idUnidad: number;
    public idAsignacion: number;
    public gastoComun: GastoComun;
}
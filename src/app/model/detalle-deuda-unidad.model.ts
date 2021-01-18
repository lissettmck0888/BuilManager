import { GastoComun } from './gasto-comun.model';
import { Unidad } from './unidad.model';

export class DetalleDeudaUnidad {

    /*   
    public Integer id;
    public String responsable;
    public Double periodDebt;
    public Double previousPeriodDebt;
    public Double balance;
    public Double apportionFactor;
    public String state;
    public LocalDateTime paymentDate;
    public String unidad; */
    
    public id: number;
    public responsable: string;
    public periodDebt: number;
    public previousPeriodDebt: number;
    public balance: number;
    public apportionFactor: number;
    public state: string;
    public paymentDate: string;
    public unidad: string;
    //public gastoComun: GastoComun;
}
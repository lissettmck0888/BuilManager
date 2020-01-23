import { Unidad } from './unidad.model';
import { Persona } from './persona.model';
import { AsignacionUnidad } from './asignacion-unidad.model';

export class Asignacion {

    public idAsignacion: number;
    public persona: Persona;
    public tipoAsignacion: string;
    public estado: string;
    public fechaAsignacion: string;
    public asignacionUnidades: AsignacionUnidad[] = [];
}
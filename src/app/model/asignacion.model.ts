import { Unidad } from './unidad.model';
import { Persona } from './persona.model';

export class Asignacion {

    public idAsignacion: number;
    public persona: Persona;
    public tipoAsignacion: string;
    public estado: string;
    public fechaAsignacion: string;
    public unidades: Unidad[] = [];
}
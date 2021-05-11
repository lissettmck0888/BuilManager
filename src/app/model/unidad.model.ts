import { TipoUnidad } from './tipo-unidad.model';

export class Unidad{
    public idUnidad: number;
    public tipoUnidad: TipoUnidad;
    public descripcion: string;
    public piso: number;
    public numero: string;
    public sector: string;
    public metrosCuadrados: number;
    public afectoProrrateo: boolean;
    public esUnidadCopropiedad: boolean;
    public factorProrrateo: number;
}
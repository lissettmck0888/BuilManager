import { TipoUnidad } from './tipo-unidad.model';

export class Unidad{
    public id: number;
    public type: string;
    public description: string;
    public floor: number;
    public number: string;
    public sector: string;
    public squareMeters: number;
    public requiresApportion: boolean;
    public mainProperty: boolean;
    public apportionFactor: number;
}

/* "propertyDto":{
               "id":1,
               "type":"Departamento",
               "description":null,
               "floor":1,
               "number":"101",
               "sector":"Torre A",
               "squareMeters":45.0,
               "requiresApportion":true,
               "mainProperty":true,
               "apportionFactor":null
            } */
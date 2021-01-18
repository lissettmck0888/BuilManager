import { Unidad } from './unidad.model';
import { Persona } from './persona.model';
import { AsignacionUnidad } from './asignacion-unidad.model';

export class Asignacion {

    public id: number;
    guestId: number;
    guestFullName: string;
    public assignmentType: string;
    public state: string;
    public assignmentDate: string;
    public assignmentPropertyList: AsignacionUnidad[] = [];
}

/* [
   {
      "id":null,
      "guestId":1,
      "guestFullName":"Angel Alfonso Torres Lora",
      "assignmentType":"propietario",
      "state":null,
      "assignmentDate":"2019-10-10T00:00:00",
      "assignmentPropertyList":[
         {
            "propertyDto":{
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
            },
            "mainProperty":true
         },
         {
            "propertyDto":{
               "id":27,
               "type":"Bodega",
               "description":null,
               "floor":1,
               "number":"B02",
               "sector":"Torre A",
               "squareMeters":12.0,
               "requiresApportion":false,
               "mainProperty":false,
               "apportionFactor":null
            },
            "mainProperty":false
         },
         {
            "propertyDto":{
               "id":53,
               "type":"Estacionamiento",
               "description":null,
               "floor":1,
               "number":"E13",
               "sector":"Torre A",
               "squareMeters":6.0,
               "requiresApportion":false,
               "mainProperty":false,
               "apportionFactor":null
            },
            "mainProperty":false
         }
      ]
   }
] */
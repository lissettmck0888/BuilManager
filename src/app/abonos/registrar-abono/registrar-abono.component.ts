import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetalleDeudaUnidad } from 'src/app/model/detalle-deuda-unidad.model';
import { Movimiento } from 'src/app/model/movimiento.model';
import { AbonosService } from 'src/app/service/abonos.service';

@Component({
  selector: 'app-registrar-abono',
  templateUrl: './registrar-abono.component.html',
  styleUrls: ['./registrar-abono.component.css']
})
export class RegistrarAbonoComponent implements OnInit {
  registrarAbono: FormGroup;
  detalleDeuda : DetalleDeudaUnidad;

  constructor(private abonoService: AbonosService, private formBuilder : FormBuilder, private router : Router) { }


  ngOnInit() {
    this.detalleDeuda = this.abonoService.detalleDeuda;
    this.registrarAbono = this.formBuilder.group({
      tipoPago : [],
      monto:[]
    });

    this.registrarAbono.controls.tipoPago.valueChanges.subscribe(tipo=>{
      console.log(tipo);
      if (tipo == 'total'){
        this.registrarAbono.controls.monto.setValue(this.detalleDeuda.montoTotal);
      }else{
        this.registrarAbono.controls.monto.reset();
      }
    });
  }

  guardarPago(){
    let movimiento : Movimiento = new Movimiento();
    movimiento.monto = this.registrarAbono.controls.monto.value;
    movimiento.idAsignacion = this.detalleDeuda.idAsignacion;
    movimiento.idGastoComun = this.detalleDeuda.gastoComun.idGastoComun; 
    this.abonoService.guardarAbono(movimiento).subscribe(data => {
      console.log(data);
      this.router.navigate(['/main/abonos']);
    });   
  }

  

}

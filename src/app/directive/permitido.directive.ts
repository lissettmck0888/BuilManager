import { Directive, Input, ElementRef } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Directive({
  selector: '[privilegio]'
})
export class PermitidoDirective {

  private permiso: string;

  constructor(
    private globalService: GlobalService,
    private elementRef: ElementRef
    ) { }

  @Input()
  set privilegio(permiso: string) {
    this.permiso = permiso;
    let permision: any = null;

    this.globalService.getCurrentUser().subscribe(user=>{
      if(this.globalService.permisos) {
        permision = this.globalService.permisos.find(perm=>perm.codigo===permiso);
      }
      if(!permision){
        this.elementRef.nativeElement.style.display = 'none';
      }
    });
  }

}

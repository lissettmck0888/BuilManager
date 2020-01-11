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
    const permision: any = this.globalService.permisos.find(perm=>perm.codigo===permiso);
    if(!permision){
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

  public slfsdf() {

  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonosDetalleUnidadComponent } from './abonos-detalle-unidad.component';

describe('AbonosDetalleUnidadComponent', () => {
  let component: AbonosDetalleUnidadComponent;
  let fixture: ComponentFixture<AbonosDetalleUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonosDetalleUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonosDetalleUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

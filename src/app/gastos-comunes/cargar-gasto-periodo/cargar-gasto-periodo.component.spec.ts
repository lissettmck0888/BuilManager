import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarGastoPeriodoComponent } from './cargar-gasto-periodo.component';

describe('CargarGastoPeriodoComponent', () => {
  let component: CargarGastoPeriodoComponent;
  let fixture: ComponentFixture<CargarGastoPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarGastoPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarGastoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

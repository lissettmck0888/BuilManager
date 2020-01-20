import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionUnidadesComponent } from './asignacion-unidades.component';

describe('AsignacionUnidadesComponent', () => {
  let component: AsignacionUnidadesComponent;
  let fixture: ComponentFixture<AsignacionUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonosPeriodoComponent } from './abonos-periodo.component';

describe('AbonosPeriodoComponent', () => {
  let component: AbonosPeriodoComponent;
  let fixture: ComponentFixture<AbonosPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonosPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonosPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

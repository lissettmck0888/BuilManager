import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoGastosComponent } from './historico-gastos.component';

describe('HistoricoGastosComponent', () => {
  let component: HistoricoGastosComponent;
  let fixture: ComponentFixture<HistoricoGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidarGastosComponent } from './consolidar-gastos.component';

describe('ConsolidarGastosComponent', () => {
  let component: ConsolidarGastosComponent;
  let fixture: ComponentFixture<ConsolidarGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidarGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidarGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

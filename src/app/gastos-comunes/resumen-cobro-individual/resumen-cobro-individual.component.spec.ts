import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCobroIndividualComponent } from './resumen-cobro-individual.component';

describe('ResumenCobroIndividualComponent', () => {
  let component: ResumenCobroIndividualComponent;
  let fixture: ComponentFixture<ResumenCobroIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCobroIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCobroIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

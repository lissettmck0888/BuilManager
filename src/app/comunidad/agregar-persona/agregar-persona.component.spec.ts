import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPersonaComponent } from './agregar-persona.component';

describe('AgregarPersonaComponent', () => {
  let component: AgregarPersonaComponent;
  let fixture: ComponentFixture<AgregarPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

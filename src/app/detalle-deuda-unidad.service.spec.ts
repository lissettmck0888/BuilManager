import { TestBed } from '@angular/core/testing';

import { DetalleDeudaUnidadService } from './detalle-deuda-unidad.service';

describe('DetalleDeudaUnidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleDeudaUnidadService = TestBed.get(DetalleDeudaUnidadService);
    expect(service).toBeTruthy();
  });
});

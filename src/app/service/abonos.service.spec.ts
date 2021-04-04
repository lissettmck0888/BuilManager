import { TestBed } from '@angular/core/testing';

import { AbonosService } from './abonos.service';

describe('AbonosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbonosService = TestBed.get(AbonosService);
    expect(service).toBeTruthy();
  });
});

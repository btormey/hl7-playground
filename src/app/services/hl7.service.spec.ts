import { TestBed, inject } from '@angular/core/testing';

import { Hl7Service } from './hl7.service';

describe('Hl7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Hl7Service]
    });
  });

  it('should ...', inject([Hl7Service], (service: Hl7Service) => {
    expect(service).toBeTruthy();
  }));
});

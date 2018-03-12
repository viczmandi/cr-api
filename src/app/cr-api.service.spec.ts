import { TestBed, inject } from '@angular/core/testing';

import { CrApiService } from './cr-api.service';

describe('CrApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrApiService]
    });
  });

  it('should be created', inject([CrApiService], (service: CrApiService) => {
    expect(service).toBeTruthy();
  }));
});

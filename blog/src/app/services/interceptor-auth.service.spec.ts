import { TestBed, inject } from '@angular/core/testing';

import { InterceptorAuthService } from './interceptor-auth.service';

describe('InterceptorAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorAuthService]
    });
  });

  it('should be created', inject([InterceptorAuthService], (service: InterceptorAuthService) => {
    expect(service).toBeTruthy();
  }));
});

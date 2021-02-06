import { TestBed } from '@angular/core/testing';

import { AuthgrawdGuard } from './authgrawd.guard';

describe('AuthgrawdGuard', () => {
  let guard: AuthgrawdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgrawdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

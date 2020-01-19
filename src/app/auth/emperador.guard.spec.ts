import { TestBed, async, inject } from '@angular/core/testing';

import { EmperadorGuard } from './emperador.guard';

describe('EmperadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmperadorGuard]
    });
  });

  it('should ...', inject([EmperadorGuard], (guard: EmperadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

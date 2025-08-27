import { TestBed } from '@angular/core/testing';

import { Empoyeeser } from './empoyeeser';

describe('Empoyeeser', () => {
  let service: Empoyeeser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empoyeeser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

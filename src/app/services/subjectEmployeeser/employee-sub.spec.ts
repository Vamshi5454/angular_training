import { TestBed } from '@angular/core/testing';

import { EmployeeSub } from './employee-sub';

describe('EmployeeSub', () => {
  let service: EmployeeSub;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

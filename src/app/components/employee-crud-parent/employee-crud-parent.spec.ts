import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudParent } from './employee-crud-parent';

describe('EmployeeCrudParent', () => {
  let component: EmployeeCrudParent;
  let fixture: ComponentFixture<EmployeeCrudParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

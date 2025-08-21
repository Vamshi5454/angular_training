import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCRUD } from './employee-crud';

describe('EmployeeCRUD', () => {
  let component: EmployeeCRUD;
  let fixture: ComponentFixture<EmployeeCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCRUD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCRUD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

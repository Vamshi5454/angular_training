import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEmployees } from './subject-employees';

describe('SubjectEmployees', () => {
  let component: SubjectEmployees;
  let fixture: ComponentFixture<SubjectEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectEmployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

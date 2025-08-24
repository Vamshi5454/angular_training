import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignServices } from './assign-services';

describe('AssignServices', () => {
  let component: AssignServices;
  let fixture: ComponentFixture<AssignServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

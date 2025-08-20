import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment19 } from './assignment19';

describe('Assignment19', () => {
  let component: Assignment19;
  let fixture: ComponentFixture<Assignment19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment19);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

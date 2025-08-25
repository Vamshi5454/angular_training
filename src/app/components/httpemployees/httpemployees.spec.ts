import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpemployees } from './httpemployees';

describe('Httpemployees', () => {
  let component: Httpemployees;
  let fixture: ComponentFixture<Httpemployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpemployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpemployees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

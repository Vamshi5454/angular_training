import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPractice } from './http-practice';

describe('HttpPractice', () => {
  let component: HttpPractice;
  let fixture: ComponentFixture<HttpPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpPractice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

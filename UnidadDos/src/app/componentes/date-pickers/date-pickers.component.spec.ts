import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickersComponent } from './date-pickers.component';

describe('DatePickersComponent', () => {
  let component: DatePickersComponent;
  let fixture: ComponentFixture<DatePickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatePickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

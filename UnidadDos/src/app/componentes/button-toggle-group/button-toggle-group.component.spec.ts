import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleGroupComponent } from './button-toggle-group.component';

describe('ButtonToggleGroupComponent', () => {
  let component: ButtonToggleGroupComponent;
  let fixture: ComponentFixture<ButtonToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

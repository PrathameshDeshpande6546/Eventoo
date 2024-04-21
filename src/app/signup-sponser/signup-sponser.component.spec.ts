import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSponserComponent } from './signup-sponser.component';

describe('SignupSponserComponent', () => {
  let component: SignupSponserComponent;
  let fixture: ComponentFixture<SignupSponserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSponserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupSponserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

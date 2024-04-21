import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserLoginComponent } from './sponser-login.component';

describe('SponserLoginComponent', () => {
  let component: SponserLoginComponent;
  let fixture: ComponentFixture<SponserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponserLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

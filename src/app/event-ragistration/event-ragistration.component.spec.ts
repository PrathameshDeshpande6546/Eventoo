import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRagistrationComponent } from './event-ragistration.component';

describe('EventRagistrationComponent', () => {
  let component: EventRagistrationComponent;
  let fixture: ComponentFixture<EventRagistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRagistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

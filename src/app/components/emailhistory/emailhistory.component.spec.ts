import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailhistoryComponent } from './emailhistory.component';

describe('EmailhistoryComponent', () => {
  let component: EmailhistoryComponent;
  let fixture: ComponentFixture<EmailhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailProgressLevelComponent } from './email-progress-level.component';

describe('EmailProgressLevelComponent', () => {
  let component: EmailProgressLevelComponent;
  let fixture: ComponentFixture<EmailProgressLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailProgressLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailProgressLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

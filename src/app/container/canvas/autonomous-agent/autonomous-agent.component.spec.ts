import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomousAgentComponent } from './autonomous-agent.component';

describe('AutonomousAgentComponent', () => {
  let component: AutonomousAgentComponent;
  let fixture: ComponentFixture<AutonomousAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomousAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomousAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPredictionComponent } from './color-prediction.component';

describe('ColorPredictionComponent', () => {
  let component: ColorPredictionComponent;
  let fixture: ComponentFixture<ColorPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestNeighborsRecommendationComponent } from './nearest-neighbors-recommendation.component';

describe('NearestNeighborsRecommendationComponent', () => {
  let component: NearestNeighborsRecommendationComponent;
  let fixture: ComponentFixture<NearestNeighborsRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestNeighborsRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearestNeighborsRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

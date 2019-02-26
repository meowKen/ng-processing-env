import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixPlayComponent } from './matrix-play.component';

describe('MatrixPlayComponent', () => {
  let component: MatrixPlayComponent;
  let fixture: ComponentFixture<MatrixPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

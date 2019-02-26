import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCatComponent } from './copy-cat.component';

describe('CopyCatComponent', () => {
  let component: CopyCatComponent;
  let fixture: ComponentFixture<CopyCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

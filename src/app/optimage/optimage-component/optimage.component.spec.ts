import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimageComponent } from './optimage.component';

describe('OptimageComponent', () => {
  let component: OptimageComponent;
  let fixture: ComponentFixture<OptimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

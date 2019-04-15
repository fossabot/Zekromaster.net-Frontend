import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZekTitleComponent } from './zek-title.component';

describe('ZekTitleComponent', () => {
  let component: ZekTitleComponent;
  let fixture: ComponentFixture<ZekTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZekTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZekTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

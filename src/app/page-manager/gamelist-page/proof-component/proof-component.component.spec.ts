import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofComponentComponent } from './proof-component.component';

describe('ProofComponentComponent', () => {
  let component: ProofComponentComponent;
  let fixture: ComponentFixture<ProofComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

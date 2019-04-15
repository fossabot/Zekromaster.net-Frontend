import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelistPageComponent } from './gamelist-page.component';

describe('GamelistPageComponent', () => {
  let component: GamelistPageComponent;
  let fixture: ComponentFixture<GamelistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTitlesComponent } from './player-titles.component';

describe('PlayerTitlesComponent', () => {
  let component: PlayerTitlesComponent;
  let fixture: ComponentFixture<PlayerTitlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTitlesComponent]
    });
    fixture = TestBed.createComponent(PlayerTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

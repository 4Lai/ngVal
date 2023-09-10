import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTitlesAndCardsComponent } from './player-titles-and-cards.component';

describe('PlayerTitlesAndCardsComponent', () => {
  let component: PlayerTitlesAndCardsComponent;
  let fixture: ComponentFixture<PlayerTitlesAndCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTitlesAndCardsComponent]
    });
    fixture = TestBed.createComponent(PlayerTitlesAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

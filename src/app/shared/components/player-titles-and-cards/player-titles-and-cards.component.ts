import { AfterViewInit, Component } from '@angular/core';
import { intersect } from '../../helpers/intersector';


@Component({
  selector: 'app-player-titles-and-cards',
  templateUrl: './player-titles-and-cards.component.html',
  styleUrls: ['./player-titles-and-cards.component.css'],
})
export class PlayerTitlesAndCardsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    intersect()
  }

}

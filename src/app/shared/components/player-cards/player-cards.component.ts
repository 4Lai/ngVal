import { Component } from '@angular/core';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { intersect } from '../../helpers/intersector';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.css'],
})
export class PlayerCardsComponent {
  combinedData = this.activatedRoute.snapshot.data['pTitlesAndCards'];
  playerCardsDataNew;
  playerCardsDataComparable;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.playerCardsDataNew = this.combinedData.slice(0, 1).map((val) => {
      return val.data.slice(0, 9);
    });
    this.playerCardsDataComparable = this.combinedData
      .slice(0, 1)
      .map((val) => {
        return val.data;
      });
  }

  ngAfterViewInit(): void {
    intersect();
  }

  onScroll(event: IInfiniteScrollEvent) {
    if (this.playerCardsDataNew[0].length < 9) {
      return;
    } else if (
      this.playerCardsDataComparable[0].length >
        this.playerCardsDataNew[0].length &&
      window.innerWidth > 1200
    ) {
      this.playerCardsDataNew[0].push(
        this.playerCardsDataComparable[0][this.playerCardsDataNew[0].length],
        this.playerCardsDataComparable[0][
          this.playerCardsDataNew[0].length + 1
        ],
        this.playerCardsDataComparable[0][this.playerCardsDataNew[0].length + 2]
      );
    } else if (
      this.playerCardsDataComparable[0].length >
        this.playerCardsDataNew[0].length &&
      window.innerWidth < 1200
    ) {
      this.playerCardsDataNew[0].push(
        this.playerCardsDataComparable[0][this.playerCardsDataNew[0].length],
        this.playerCardsDataComparable[0][this.playerCardsDataNew[0].length + 1]
      );
    } else if (
      this.playerCardsDataComparable[0].length ===
      this.playerCardsDataNew[0].length
    ) {
      return;
    } else {
      return;
    }
  }
}

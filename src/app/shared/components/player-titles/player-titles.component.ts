import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { intersect } from '../../helpers/intersector';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-player-titles',
  templateUrl: './player-titles.component.html',
  styleUrls: ['./player-titles.component.css'],
})
export class PlayerTitlesComponent implements AfterViewInit {
  combinedData = this.activatedRoute.snapshot.data['pTitlesAndCards'];
  playerTitlesDataNew;
  playerTitlesDataComparable;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.playerTitlesDataNew = this.combinedData.slice(1, 2).map((val) => {
      return val.data.slice(0, 12);
    });
    this.playerTitlesDataComparable = this.combinedData
      .slice(1, 2)
      .map((val) => {
        return val.data;
      });
  }

  ngAfterViewInit(): void {
    intersect();
  }

  onScroll(event: IInfiniteScrollEvent) {
    if (this.playerTitlesDataNew[0].length < 12) {
      return;
    } else if (
      this.playerTitlesDataComparable[0].length >
        this.playerTitlesDataNew[0].length &&
      window.innerWidth > 1200
    ) {
      this.playerTitlesDataNew[0].push(
        this.playerTitlesDataComparable[0][this.playerTitlesDataNew[0].length],
        this.playerTitlesDataComparable[0][
          this.playerTitlesDataNew[0].length + 1
        ],
        this.playerTitlesDataComparable[0][
          this.playerTitlesDataNew[0].length + 2
        ]
      );
    } else if (
      this.playerTitlesDataComparable[0].length >
        this.playerTitlesDataNew[0].length &&
      window.innerWidth < 1200
    ) {
      this.playerTitlesDataNew[0].push(
        this.playerTitlesDataComparable[0][this.playerTitlesDataNew[0].length],
        this.playerTitlesDataComparable[0][
          this.playerTitlesDataNew[0].length + 1
        ]
      );
    } else if (
      this.playerTitlesDataComparable[0].length ===
      this.playerTitlesDataNew[0].length
    ) {
      return;
    } else {
      return;
    }
  }
}

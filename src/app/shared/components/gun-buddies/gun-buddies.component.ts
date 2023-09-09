import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GunBuddies } from '../../interfaces/gun-buddies';
import { intersect } from '../../helpers/intersector';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-gun-buddies',
  templateUrl: './gun-buddies.component.html',
  styleUrls: ['./gun-buddies.component.css'],
})
export class GunBuddiesComponent implements AfterViewInit {
  gunBuddiesData: GunBuddies['data'] =
    this.activatedRoute.snapshot.data['gunBuddies'];

  gunBuddiesInsertedData;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.gunBuddiesInsertedData = this.gunBuddiesData.slice(0, 12);
  }

  ngAfterViewInit(): void {
    intersect();
  }

  onScroll($event: IInfiniteScrollEvent) {
    if (this.gunBuddiesInsertedData < 12) {
      return;
    } else if (
      this.gunBuddiesData.length > this.gunBuddiesInsertedData.length &&
      window.innerWidth > 1200
    ) {
      this.gunBuddiesInsertedData.push(
        this.gunBuddiesData[
          this.gunBuddiesData.length - this.gunBuddiesInsertedData.length
        ],
        this.gunBuddiesData[
          this.gunBuddiesData.length - this.gunBuddiesInsertedData.length + 1
        ],
        this.gunBuddiesData[
          this.gunBuddiesData.length - this.gunBuddiesInsertedData.length + 2
        ]
      );
      intersect();
    } else if (
      this.gunBuddiesData.length > this.gunBuddiesInsertedData.length &&
      window.innerWidth < 1200
    ) {
      this.gunBuddiesInsertedData.push(
        this.gunBuddiesData[
          this.gunBuddiesData.length - this.gunBuddiesInsertedData.length
        ],
        this.gunBuddiesData[
          this.gunBuddiesData.length - this.gunBuddiesInsertedData.length + 1
        ]
      );
      intersect();
    } else if (
      this.gunBuddiesData.length === this.gunBuddiesInsertedData.length
    ) {
      intersect();
    } else {
    }
  }
}

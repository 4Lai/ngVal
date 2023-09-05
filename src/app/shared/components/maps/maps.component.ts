import { AfterViewInit, Component } from '@angular/core';
import { Maps } from '../../interfaces/maps';
import { ActivatedRoute } from '@angular/router';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements AfterViewInit {
  listOfMaps: Maps['data'] = this.activatedRoute.snapshot.data['mapList'];
  indexCount: number = 0;
  isClicked: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  leftCount() {
    this.indexCount--;
    if (this.indexCount === -1) {
      this.indexCount = this.listOfMaps.length - 1;
    }
  }

  rightCount() {
    this.indexCount++;
    if (this.indexCount === this.listOfMaps.length) {
      this.indexCount = 0;
    }
  }

  ngAfterViewInit(): void {
    intersect();
  }
}

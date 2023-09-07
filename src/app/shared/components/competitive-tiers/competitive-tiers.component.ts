import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitiveTiers } from '../../interfaces/competitive-tiers';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-competitive-tiers',
  templateUrl: './competitive-tiers.component.html',
  styleUrls: ['./competitive-tiers.component.css'],
})
export class CompetitiveTiersComponent implements AfterViewInit {
  compTiers: CompetitiveTiers['data'] =
    this.activatedRoute.snapshot.data['tiers']
  tiers = this.compTiers.map((val) => {
    return val.tiers;
  })
  numberOnClick: number = 0;
  isClicked: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {
    intersect()
  }

  onClickExpand(index: number) {
    if (this.numberOnClick === index) {
      this.numberOnClick = index;
      this.isClicked = !this.isClicked;
    } else if (this.numberOnClick != index) {
      this.numberOnClick = index;
      this.isClicked = true;
    } else {
      this.numberOnClick = index;
    }
  }
}

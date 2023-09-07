import { AfterViewInit, Component, Input } from '@angular/core';
import { Weapons } from '../../interfaces/weapons';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css'],
})
export class WeaponsComponent implements AfterViewInit {
  weaponsDataList: Weapons['data'] =
    this.activatedRoute.snapshot.data['weapons'];


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    intersect();
  }

  navigateTo(el:string) {
    this.router.navigate([`weapons/${el}`])
  }
}

import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weapons } from '../../interfaces/weapons';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-weapons-single-details',
  templateUrl: './weapons-single-details.component.html',
  styleUrls: ['./weapons-single-details.component.css'],
})
export class WeaponsSingleDetailsComponent implements AfterViewInit {
  url: string = this.activatedRoute.snapshot.params['gun'];
  weaponDetails: Weapons['data'] = this.activatedRoute.snapshot.data[
    'weaponsDetails'
  ].filter((val) => {
    if (val.displayName === this.url) {
      return val;
    }
  });
  isClicked: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngAfterViewInit(): void {
    intersect();
  }

  ngOnInit() {
    console.log(this.weaponDetails);
  }

  backButton() {
    this.router.navigate(['weapons']);
  }

  rotateBox() {
    this.isClicked = !this.isClicked;
  }
}

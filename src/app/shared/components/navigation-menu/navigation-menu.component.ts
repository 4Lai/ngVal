import { Component } from '@angular/core';
import { CategoriesService } from '../../services/no-api-data-services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
})
export class NavigationMenuComponent {
  isClicked: boolean = false;

  constructor(public categories: CategoriesService, public router: Router) {}

  openMenu() {
    this.isClicked = !this.isClicked;
  }

  toMain() {
    this.router.navigate([''])
  }
}

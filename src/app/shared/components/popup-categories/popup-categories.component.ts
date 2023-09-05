import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from '../../services/no-api-data-services/categories.service';

@Component({
  selector: 'app-popup-categories',
  templateUrl: './popup-categories.component.html',
  styleUrls: ['./popup-categories.component.css'],
})
export class PopupCategoriesComponent {

  constructor(private matDialog: MatDialog, public categories: CategoriesService) {}

  close() {
    this.matDialog.closeAll();
  }
}

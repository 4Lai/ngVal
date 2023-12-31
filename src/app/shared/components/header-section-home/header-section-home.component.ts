import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Agents } from '../../interfaces/agents';
import { MatDialog } from '@angular/material/dialog';
import { PopupCategoriesComponent } from '../popup-categories/popup-categories.component';


@Component({
  selector: 'app-header-section-home',
  templateUrl: './header-section-home.component.html',
  styleUrls: ['./header-section-home.component.css'],
})
export class HeaderSectionHomeComponent {
  agentList: Agents['data'] = this.activatedRoute.snapshot.data['agents'].slice(
    0,
    3
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialogRef: MatDialog,
  ) {}

  openPopup() {
   this.dialogRef.open(PopupCategoriesComponent);
  }


}

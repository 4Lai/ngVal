import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkinBundles } from '../../interfaces/skin-bundles';
import { intersect } from '../../helpers/intersector';
import { take } from 'rxjs';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-skin-bundles',
  templateUrl: './skin-bundles.component.html',
  styleUrls: ['./skin-bundles.component.css'],
})
export class SkinBundlesComponent implements AfterViewInit {
  skinBundlesData: SkinBundles['data'] =
    this.activatedRoute.snapshot.data['skinBundles'];
  skinInsertedData;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.skinInsertedData = this.skinBundlesData.slice(0, 4);
  }

  ngAfterViewInit(): void {
    intersect();
  }

  onScroll($event: IInfiniteScrollEvent) {
    if(this.skinInsertedData < 4) {
      return
    } else if (this.skinInsertedData.length < this.skinBundlesData.length) {

      this.skinInsertedData.push(
        this.skinBundlesData[this.skinInsertedData.length]
        );
      } else {

      }
  }
}

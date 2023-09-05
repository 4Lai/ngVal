import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { intersect } from '../../helpers/intersector';
import { Agents } from '../../interfaces/agents';
import { ActivatedRoute } from '@angular/router';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements AfterViewInit {
  agentsDetailed: Agents['data'] = this.activatedRoute.snapshot.data[
    'agentsDetailed'
  ].filter((element) => {
    if (element.isPlayableCharacter === true) {
      return element;
    }
  });
  currentClick: number = 0;
  agentsAvailable;
  abilities = this.agentsDetailed.map(val => {
    return 0
  })


  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit() {
    intersect();
  }

  ngOnInit() {
    this.agentsAvailable = this.agentsDetailed.slice(0, 2);
    console.log(this.abilities);
  }

  onScroll(event: IInfiniteScrollEvent) {
    if (this.agentsAvailable.length < 2) {
      return;
    } else if (this.agentsAvailable.length < this.agentsDetailed.length) {
      this.agentsAvailable.push(
        this.agentsDetailed[this.agentsAvailable.length]
      );
      intersect();
    } else if (this.agentsAvailable.length === this.agentsDetailed.length) {
      intersect();
    } else {
      
    }
  }

  onClickI(number: number, index: number) {
    this.abilities[index] = number
  }
}

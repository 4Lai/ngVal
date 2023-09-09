import { AfterViewInit, Component } from '@angular/core';
import { Events } from '../../interfaces/events';
import { ActivatedRoute } from '@angular/router';
import { intersect } from '../../helpers/intersector';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements AfterViewInit {
  eventsData: Events['data'] = this.activatedRoute.snapshot.data['events'];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {
    intersect()
  }

  ngOnInit() {
    console.log(this.eventsData);
  }
}

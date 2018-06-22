import { EventMeeting } from './../../interfaces/event';
import { EventService } from './../../services/event/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.pug',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

	events: EventMeeting[] = [];

	constructor(
		private eventService: EventService
	) {
		this.events = this.eventService.getAllEvents();
	}

	ngOnInit() {
		this.events = this.eventService.getAllEvents();
	}

}

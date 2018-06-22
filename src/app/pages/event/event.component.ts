import { EventService } from './../../services/event/event.service';
import { Component, OnInit } from '@angular/core';
import { EventMeeting } from '../../interfaces/event';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.pug',
	styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

	private event: EventMeeting;

	constructor(
		private eventService: EventService
	) {
		this.setNewEmptyEvent();
	}

	ngOnInit() {
	}

	setNewEmptyEvent() {
		this.event = {
			id: null,
			name: null,
			startDate: null,
			startTime: null,
			endDate: null,
			endTime: null,
			ticket: {
				id: null,
				name: null,
				quantity: null,
				value: null,
				remaining: null,
				free: false
			}
		};
	}

	onSubmit() {
		if (this.event.id) {
			this.eventService.updateEvent(this.event);
		} else {
			this.eventService.createEvent(this.event);
		}
		this.setNewEmptyEvent();
	}

}

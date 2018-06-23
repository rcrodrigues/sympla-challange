import { EventMeeting } from './../../interfaces/event';
import { EventService } from './../../services/event/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.pug',
	styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

	public event: EventMeeting;

	constructor(
		private eventService: EventService,
		private route: ActivatedRoute
	) {
		this.setNewEmptyEvent();
	}

	ngOnInit() {
		const eventId = this.route.snapshot.paramMap.get('id');
		if (eventId) {
			this.eventService.getEvent(eventId).valueChanges()
			.subscribe( (event: EventMeeting) => this.event = event);
		}
	}

	setNewEmptyEvent() {
		this.event = {
			id: null,
			name: null,
			city: null,
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

import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
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
	eventWatcher: Subscription;

	constructor(
		private eventService: EventService,
		private router: Router
	) {
	}

	ngOnInit() {
		this.eventWatcher = this.eventService.getAllEvents().subscribe( (events: EventMeeting[]) => this.events = events);
	}

	edit(event: EventMeeting) {
		this.router.navigate(['/event', event.id]);
	}

	// tslint:disable-next-line:use-life-cycle-interface
	ngOnDestroy() {
		this.eventWatcher.unsubscribe();
	}
}

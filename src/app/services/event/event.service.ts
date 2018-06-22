import { EventMeeting } from './../../interfaces/event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	private events: EventMeeting[] = [];

	constructor(
		private http: HttpClient
	) {
	}

	public getAllEvents(): EventMeeting[] {
		return this.events;
	}

	public createEvent(event: EventMeeting): EventMeeting {
		// stub id generation
		event.id = this.generateUUID();
		event.ticket.id = this.generateUUID();

		this.events.push(event);
		alert('Evento "' + event.name + '" criado com sucesso');
		return event;
	}

	public updateEvent(updatedEvent: EventMeeting) {
		let oldEvent = this.events.find(event => event.id === updatedEvent.id);
		oldEvent = updatedEvent;
		alert('Evento "' + updatedEvent.name + '" atualizado com sucesso');
	}

	// public deleteEvent(id: string): void {

	// 	const event = this.events.find( it => it.id === id);
	// 	const eventIndex = this.events.indexOf(event);
	// 	this.events.splice(eventIndex, 1);
	// alert('Evento cancelado com sucesso');
	// }

	private s4(): string {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	private generateUUID(): string {
			return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
	}

}

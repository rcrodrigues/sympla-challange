import { Observable } from 'rxjs';
import { EventMeeting } from './../../interfaces/event';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
	providedIn: 'root'
})
export class EventService {

	constructor(
		private db: AngularFirestore
	) {
		db.collection('events')
			.valueChanges()
			.subscribe( (events: EventMeeting[]) => {
				console.log(events);
			});
	}

	public getAllEvents(): Observable<{}[]> {
		return this.db.collection('events')
		.valueChanges();
	}

	public getEvent(eventId: string): AngularFirestoreDocument<{}> {

		return this.db.collection('events')
			.doc(eventId);

	}

	public createEvent(event: EventMeeting): EventMeeting {
		event.id = this.db.createId();
		event.city = 'Belo Horizonte';
		event.ticket.id = event.id;
		event.ticket.remaining = event.ticket.quantity;
		this.db.collection('events')
			.doc(event.id)
			.set(event)
			.then(response => alert('Evento "' + event.name + '" criado com sucesso'))
			.catch(error => {
				console.error(error);
				alert('Opps.. algo não ocorreu como o esperado. Por favor, tente novamente mais tarde.');
			});
		return event;
	}

	public updateEvent(updatedEvent: EventMeeting) {
		this.db.collection('events')
			.doc(updatedEvent.id)
			.set(updatedEvent)
			.then(response => alert('Evento "' + updatedEvent.name + '" atulizado com sucesso'))
			.catch(error => {
				console.error(error);
				alert('Opps.. algo não ocorreu como o esperado. Por favor, tente novamente mais tarde.');
			});
	}

}

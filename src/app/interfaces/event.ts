import { Ticket } from './ticket';

export interface EventMeeting {
	id: string;
	name: string;
	city: string;
	startDate: Date;
	startTime: string;
	endDate: Date;
	endTime: string;
	ticket: Ticket;
}

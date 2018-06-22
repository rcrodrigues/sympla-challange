import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-page-header',
	templateUrl: './page-header.component.pug'
})
export class PageHeaderComponent implements OnInit {

	@Input('pageName') pageName = '';
	@Input('showCreateEventBtn') showCreateEventBtn = false;

	constructor() { }

	ngOnInit() {
	}

}

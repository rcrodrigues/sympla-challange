import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.pug'
})
export class AvatarComponent implements OnInit {

	@Input('imgSrc') imgSrc = '';

	constructor() { }

	ngOnInit() {
	}

}

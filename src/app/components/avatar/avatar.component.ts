import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.pug',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input('imgSrc') imgSrc: string = '';

  constructor() { }

  ngOnInit() {
  }

}

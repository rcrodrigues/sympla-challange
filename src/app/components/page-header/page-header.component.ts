import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.pug',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input('pageName') pageName : string = "";
  @Input('showCreateEventBtn') showCreateEventBtn : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

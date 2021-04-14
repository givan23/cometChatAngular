import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  isChatOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  emitToggleChat($event) {
    this.isChatOpen = $event;
  }

}

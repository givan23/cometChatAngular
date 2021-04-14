import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button-chat',
  templateUrl: './button-chat.component.html',
  styleUrls: ['./button-chat.component.scss']
})

export class ButtonChatComponent implements OnInit {

  @Output() emitToggleChat: EventEmitter<any> = new EventEmitter();

  isChatOpen: boolean;


  constructor() { }

  ngOnInit(): void {
    this.isChatOpen = true;
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.emitToggleChat.emit(this.isChatOpen);

  }

}

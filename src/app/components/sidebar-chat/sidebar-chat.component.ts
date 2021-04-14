import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
  styleUrls: ['./sidebar-chat.component.scss']
})
export class SidebarChatComponent implements OnInit {

  addressBookList: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.addressBookList = [{},{},{},{},{},{},{}]
  }

}

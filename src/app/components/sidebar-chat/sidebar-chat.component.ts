import { Component, OnInit } from '@angular/core';
import { orderUserListFromStatus } from 'src/app/utilities/sidebar';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
  styleUrls: ['./sidebar-chat.component.scss']
})
export class SidebarChatComponent implements OnInit {

  addressBookList: Array<any>

  constructor() { }

  ngOnInit(): void {
    this.addressBookList = [
      {
        img: "../../../assets/img/userIcon0.png",
        username: "Mario Rossi",
        city: "Roma",
        status: true
      },
      {
        img: "../../../assets/img/userIcon1.png",
        username: "Veronica Gialli",
        city: "Roma",
        status: false
      },
      {
        img: "../../../assets/img/userIcon2.png",
        username: "Priscilla Malcontenta",
        city: "Frosinone",
        status: true
      },
      {
        img: "../../../assets/img/userIcon3.png",
        username: "Francesco Verdi",
        city: "Latina",
        status: false
      },
      {
        img: "../../../assets/img/userIcon4.png",
        username: "Maria Esposito",
        city: "Rieti",
        status: true
      },
      {
        img: "../../../assets/img/userIcon5.png",
        username: "Sandra Mia",
        city: "Viterbo",
        status: true
      },
      {
        img: "../../../assets/img/userIcon6.png",
        username: "Lucrezia Pinci",
        city: "Viterbo",
        status: true
      },
      {
        img: "../../../assets/img/userIcon3.png",
        username: "Francesco Verdi",
        city: "Latina",
        status: false
      },
      {
        img: "../../../assets/img/userIcon4.png",
        username: "Maria Esposito",
        city: "Rieti",
        status: true
      },
      {
        img: "../../../assets/img/userIcon4.png",
        username: "Maria Esposito",
        city: "Rieti",
        status: true
      },
      {
        img: "../../../assets/img/userIcon4.png",
        username: "Maria Esposito",
        city: "Rieti",
        status: true
      },
      {
        img: "../../../assets/img/userIcon4.png",
        username: "Maria Esposito",
        city: "Rieti",
        status: true
      }
    ]
    // ORDER USER LIST IN ACCORDING THE USER STATUS
    this.addressBookList = orderUserListFromStatus(this.addressBookList);

  }


}

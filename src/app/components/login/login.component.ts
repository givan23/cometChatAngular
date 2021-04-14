import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CometChatService } from 'src/app/services/comet-chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // FORM LOGIN
  public loginForm = new FormGroup({
    uid: new FormControl('', Validators.required)
  });


  constructor(private chat: CometChatService, private router: Router) { }

  // IF LOGGED SEND ME IN TO THE CHAT
  public signIn(): void {
    const user = this.loginForm.value['uid'];
    const check = user.localeCompare('admin') === 0;
    
    if (check) {
      console.log("entrato in call");
      this.router.navigate(['call']);
    } else {
      console.log("entrato in login");
      this.router.navigate(['login']);
    }

  }

}

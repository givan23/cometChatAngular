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
    this.chat.login(this.loginForm.value['uid']).subscribe(signedUser => {
      this.router.navigate(['call']);
    });

  }

}

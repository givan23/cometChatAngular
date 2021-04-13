import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable, from } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CometChat } from "@cometchat-pro/chat";

@Injectable({
  providedIn: 'root'
})

export class CometChatService {

  private initialized: Subject<boolean> = new ReplaySubject<boolean>();
  private signedIn: string;

  constructor() {
    CometChat.init(environment.appId).then(_ => {
      console.log('Comet Chat initialized.');
      this.initialized.next(true);
    }, error => {
      console.log('Initialization error: ' + error);
    });
  }

  public login(uid: string): Observable<any> {
    uid = uid.toLowerCase();
    return this.initialized.pipe(filter(v => v), mergeMap(() => {
      return from(CometChat.login(uid, environment.apiKey)).pipe(tap(() => {
        this.signedIn = uid;
      }));
    }));
  }
  public getSignedIn(): string {
    return this.signedIn;
  }
}

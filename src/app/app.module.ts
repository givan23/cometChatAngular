import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CallComponent } from './components/call/call.component';
import { AppRootingModule } from './app-rooting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonChatComponent } from './components/button-chat/button-chat.component';
import { SidebarChatComponent } from './components/sidebar-chat/sidebar-chat.component';
import { BodyChatComponent } from './components/body-chat/body-chat.component';
import { BodyChatHeaderComponent } from './components/body-chat-header/body-chat-header.component';
import { BodyChatTextareaComponent } from './components/body-chat-textarea/body-chat-textarea.component';
import { BodyChatInputComponent } from './components/body-chat-input/body-chat-input.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallComponent,
    ButtonChatComponent,
    SidebarChatComponent,
    BodyChatComponent,
    BodyChatHeaderComponent,
    BodyChatTextareaComponent,
    BodyChatInputComponent
  ],
  imports: [
    BrowserModule,
    AppRootingModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CallComponent } from './components/call/call.component';
import { AppRootingModule } from './app-rooting.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    AppRootingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

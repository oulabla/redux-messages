import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { appStoreProviders } from './app.store';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatThreadComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    appStoreProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

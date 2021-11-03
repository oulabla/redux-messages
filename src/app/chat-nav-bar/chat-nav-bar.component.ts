import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import { AppStore } from '../app.store';
import { getUnreadMessagesCount } from '../thread/threads.reducer';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number = 0;

  constructor(
    @Inject(AppStore) private store: Store<AppState>
  ) { 
    store.subscribe(()=> this.updateState());
    this.updateState();
  }

  updateState(){
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }

  ngOnInit(): void {
  }

}

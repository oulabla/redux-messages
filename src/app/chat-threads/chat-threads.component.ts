import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import { AppStore } from '../app.store';
import { Thread } from '../thread/thread.model';
import { getAllThreads, getCurrentThread } from '../thread/threads.reducer';
import * as ThreadActions from '../thread/thread.actions';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {
  threads: Thread[] = [];
  currentThreadId: string|null = null;


  constructor(
    @Inject(AppStore) private store: Store<AppState>
  ) { 
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  updateState(){
    const state = this.store.getState();
    this.threads = getAllThreads(state);
    let currentThread = getCurrentThread(state);
    if(currentThread){
      this.currentThreadId = currentThread.id
    }
    
  }

  handleThreadClicked(thread: Thread){
    this.store.dispatch(ThreadActions.selectThread(thread))
  }

  ngOnInit(): void {
  }

}

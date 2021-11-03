import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../app.reducer';
import { AppStore } from '../app.store';
import { me, tLadycap } from '../data/data';
import { Message } from '../message/message.model';
import { Thread } from '../thread/thread.model';
import { getCurrentThread } from '../thread/threads.reducer';
import { User } from '../user/user.model';
import { getCurrentUser } from '../user/users.reducer';
import { uuid } from '../utils/uuid';
import * as ThreadActions from '../thread/thread.actions';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {
  currentThread: Thread =  tLadycap;
  draftMessage: Message = {
    id: '',
    sentAt: new Date(),
    isRead: true,
    thread:  tLadycap,
    author:  me,
    text: 'draft'
  }
  currentUser: User = me;

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private el: ElementRef,
  ) { 
    store.subscribe(() => {
      this.updateState()
    })
    this.updateState()
  }

  updateState(){
    const state = this.store.getState();
    const thread = getCurrentThread(state);
    if(thread){
      this.currentThread = thread;
    }

    const user = getCurrentUser(state);
    if(user){
      this.currentUser = user;
    }

    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector(".msg-container-base");
    if(scrollPane){
      setTimeout(() => scrollPane.scrollTop = scrollPane.scrollHeight);
    }
  }

  sendMessage(): void {
    this.store.dispatch(ThreadActions.addMessage(this.currentThread, {
      author: this.currentUser,
      isRead: true,
      text: this.draftMessage.text,
    }))
    this.draftMessage = {
      id: '',
      sentAt: new Date(),
      isRead: true,
      thread:  tLadycap,
      author:  me,
      text: ''
    }
  }

  onEnter(event: any){
    this.sendMessage();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}

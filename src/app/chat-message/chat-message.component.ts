import { Component, Input, OnInit } from '@angular/core';
import { me, tLadycap } from '../data/data';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message = {
    id: '',
    sentAt: new Date(),
    isRead: true,
    thread:  tLadycap,
    author:  me,
    text: 'draft'
  };
  incoming: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

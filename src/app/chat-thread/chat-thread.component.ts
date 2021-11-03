import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread = {
    id: "test",
    name: 'null',
    avatarSrc: '',
    messages: [],
  };
  @Input() selected: boolean = false;
  @Output() onThreadSelected: EventEmitter<Thread>;

  constructor() { 
    this.onThreadSelected = new EventEmitter<Thread>();
    
  }

  ngOnInit(): void {
  }

  clicked(event: any): void {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }

}

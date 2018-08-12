import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  messagesService: MessagesService;

  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
    this.messages = [];
   }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messages = this.messagesService.getMessage();
  }

  addMessage(message: Message) {
    this.messagesService.setMessage(message);
  }

}

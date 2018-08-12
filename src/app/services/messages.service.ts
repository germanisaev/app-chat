import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  messages: Message[] = [
    {
      id: 1,
      comment: 'hello',
      sentdate: new Date(),
      username: 'german'
    },
    {
      id: 2,
      comment: 'how are you',
      sentdate: new Date(),
      username: 'german'
    },
    {
      id: 3,
      comment: 'fine',
      sentdate: new Date(),
      username: 'kodi'
    },
    {
      id: 4,
      comment: 'good',
      sentdate: new Date(),
      username: 'kobi'
    },
    {
      id: 5,
      comment: 'very nice',
      sentdate: new Date(),
      username: 'kobi'
    },
    {
      id: 6,
      comment: 'i sent you message',
      sentdate: new Date(),
      username: 'erez'
    },
    {
      id: 7,
      comment: 'where answer on my message',
      sentdate: new Date(),
      username: 'erez'
    }
  ]

  getMessage(): Message[] {
    return this.messages;
  }

  setMessage(message: Message) {
    this.messages.push(message);
  }
}

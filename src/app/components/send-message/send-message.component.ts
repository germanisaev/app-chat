import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  messagesService: MessagesService;
  message: Message;

  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
  }

  ngOnInit() {
  }

  send(comment) {
    if (comment.value != "") {
      this.message = {
        id: (new Date()).getTime(),
        comment: comment.value,
        sentdate: new Date(),
        username: "german"
      }
      comment.value = '';

      this.messagesService.setMessage(this.message);
    }
  }
}

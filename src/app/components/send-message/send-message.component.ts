import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message, Group } from '../../models/model-index';
import { AuthService } from '../../shared/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  messagesService: MessagesService;
  message: Message;
  user = null;
  topics: AngularFireList<any[]>;

  constructor(
    messagesService: MessagesService, 
    private auth: AuthService,
    public db: AngularFireDatabase) {

    this.messagesService = messagesService;
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);    
    this.topics = this.db.list('/topics');
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  send(comment) {
    if (comment.value != "") {
      this.message = {
        id: (new Date()).getTime(),
        comment: comment.value,
        sentdate: new Date(),
        username: "german",
        group: {
          id: 1,
          manager: 'german',
          name: 'the man'
        }
      }
      comment.value = '';
      this.messagesService.setMessage(this.message);
    }
  }
}

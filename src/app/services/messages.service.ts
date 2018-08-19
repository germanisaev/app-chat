import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  msgList: AngularFireList<Message>;

  constructor(db: AngularFireDatabase) {
    this.msgList = db.list('items');
  }

  getMessage(): Observable<Message[]> {
    //return this.msgList.valueChanges();
    /*
    return Rx.Observable.from(this.msgList.valueChanges())
      .map(msg => msg.sentdate = new Date(msg.sentdate));
    

    
*/
    return this.msgList.valueChanges().pipe(
      map(res => this.reviver(res))
    );
  }

  reviver(value): any {
    for (let i = 0; i < value.length; i++) {
      if (!value[i].sentdate) value[i].sentdate = null;
    }
    return value;
  }

  /*
  private extractData(res: Response) {
    var data = res.json().data || [];
    data.forEach((d) => {
      d.sentdate = new Date(d.sentdate);
    });
    return data;
  }
  */

  setMessage(message: Message) {
    message.sentdate = Number(message.sentdate);
    this.msgList.push(message).then(res => console.log(res));
  }
}

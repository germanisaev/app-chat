import { Group } from './model-index'


export class Message {
    id: number;
    comment: string;
    sentdate: Date | number;
    username: string;
    group?: Group;
}

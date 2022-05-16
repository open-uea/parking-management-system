import { C } from "./Constants";
import { Manage } from "./Manage";
interface IMessageProps {
    uid: string;
    toUserUID: string;
    toUserUIDS: string[];
    fromUserUID: string;
    replyToRef: string;
    timestamp: string;
    title: string;
    content: string;
    state: C.MESSAGE_STATE_DELIVERED | C.MESSAGE_STATE_READ;
}
export declare class Message extends Manage {
    toUserUID: IMessageProps["toUserUID"];
    fromUserUID: IMessageProps["fromUserUID"];
    replyToRef: IMessageProps["replyToRef"];
    timestamp: IMessageProps["timestamp"];
    title: IMessageProps["title"];
    content: IMessageProps["content"];
    state: IMessageProps["state"];
    constructor({ toUserUID, toUserUIDS, fromUserUID, replyToRef, timestamp, title, content, uid, }?: Partial<IMessageProps>);
    modify({ state }?: Partial<IMessageProps>): Promise<Message>;
    send(): Promise<any[]>;
    toString(): Promise<string[]>;
    _formatDate(date: any): string;
}
export {};

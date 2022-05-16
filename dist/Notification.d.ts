import { C } from "./Constants";
import { Manage } from "./Manage";
interface INotificationProps {
    uid: string;
    toUserUID: string;
    content: string;
    state: C.NOTIFICATION_STATE_DISPATCHED | C.NOTIFICATION_STATE_RECEIVED;
}
export declare class Notification extends Manage {
    private toUserUID;
    private content;
    private state;
    constructor({ toUserUID, content, uid }?: Partial<INotificationProps>);
    modify({ state }?: Partial<INotificationProps>): Promise<Notification>;
    send(): Promise<Notification>;
}
export {};

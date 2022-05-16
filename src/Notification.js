import { C } from "./Constants";
import { Manage } from "./Manage";

export class Notification extends Manage {
  constructor({ toUserUID, content, uid } = {}) {
    super(uid);
    this.toUserUID = toUserUID;
    this.content = content;
    this.ORM = C.ORM_NOTIFICATIONS;
  }

  modify({ state } = {}) {
    this.state = state || this.state;
    return this.put({ uid: this.uid });
  }

  send() {
    this.state = C.NOTIFICATION_STATE_DISPATCHED;
    return this.post();
  }
}

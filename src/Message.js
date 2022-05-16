import { C } from "./Constants";
import { Manage } from "./Manage";
import { Admin } from "./Admin";
import { Driver } from "./Driver";

export class Message extends Manage {
  constructor({
    toUserUID,
    toUserUIDS,
    fromUserUID,
    replyToRef,
    timestamp,
    title,
    content,
    uid,
  } = {}) {
    super(uid);
    this.mem = toUserUIDS || [toUserUID];
    this.toUserUID = toUserUID;
    this.fromUserUID = fromUserUID;
    this.replyToRef = replyToRef;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
    this.ORM = C.ORM_MESSAGES;
    this.state = C.MESSAGE_STATE_DELIVERED;
  }

  modify({ state } = {}) {
    this.state = state || this.state;
    return this.put({ uid: this.uid });
  }

  send() {
    let result = [];
    for (let i = 0; i < this.mem.length; i++) {
      result.push(
        new Message({
          toUserUID: this.mem[i],
          fromUserUID: this.fromUserUID,
          title: this.title,
          content: this.content,
          replyToRef: this.replyToRef,
          timestamp: this.timestamp || new Date(Date.now()).toISOString(),
        }).post()
      );
    }
    return Promise.all(result);
  }

  toString() {
    return new Promise((resolve) => {
      Promise.all([
        new Admin()
          .get({ uid: this.fromUserUID })
          .then((driver) => driver)
          .catch(() => null),
        new Driver()
          .get({ uid: this.fromUserUID })
          .then((driver) => driver)
          .catch(() => null),
      ])
        .then(([fromAdmin, fromDriver]) => {
          const from = fromAdmin || fromDriver;
          resolve([
            `From: ${from.name.toUpperCase()}`,
            `Date: ${this._formatDate(new Date(this.timestamp))}`,
            `Title: ${this.title}`,
            this.content,
          ]);
        })
        .catch(() => resolve([, , "Error!!", " message could not be parsed"]));
    });
  }

  _formatDate(date) {
    const padTo2Digits = (num) => num.toString().padStart(2, "0");
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        // padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }
}

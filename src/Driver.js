import { C } from "./Constants";
import { Manage } from "./Manage";

export class Driver extends Manage {
  constructor({ name, email, password, uid } = {}) {
    super(uid);
    this.name = name;
    this.email = email;
    this.password = password;
    this.state = C.DRIVER_STATE_ACTIVE;
    this.ORM = C.ORM_DRIVERS;
  }

  modify({ name, email, password, state } = {}) {
    this.name = name || this.name;
    this.email = email || this.email;
    this.state = state || this.state;
    this.password = password || this.password;
    return this.put({ uid: this.uid });
  }

  register() {
    return this.post();
  }

  login() {
    return this.auth();
  }

  recover() {
    return this.recoverEmail();
  }

  toggleBan() {
    if (this.state === C.DRIVER_STATE_ACTIVE) {
      return this.modify({ state: C.DRIVER_STATE_BANNED });
    }
    if (this.state === C.DRIVER_STATE_BANNED) {
      return this.modify({ state: C.DRIVER_STATE_ACTIVE });
    }
    return Promise.resolve(this);
  }

  logout() {}
}

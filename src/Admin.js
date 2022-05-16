import { C } from "./Constants";
import { Manage } from "./Manage";

export class Admin extends Manage {
  constructor({ name, password, uid } = {}) {
    super(uid);
    this.name = name;
    this.password = password;
    this.ORM = C.ORM_ADMINS;
  }

  modify({ name, password, state } = {}) {
    this.name = name || this.name;
    this.state = state || this.state;
    this.password = password || this.password;
    return this.put({ uid: this.uid });
  }

  register() {
    return this.post();
  }

  login() {
    return new Promise((resolve, reject) => {
      this.auth()
        .then((admin) => resolve(admin.modify({ state: C.ADMIN_STATE_ONLINE })))
        .catch((error) => reject(error));
    });
  }

  logout() {
    this.state = C.ADMIN_STATE_OFFLINE;
  }
}

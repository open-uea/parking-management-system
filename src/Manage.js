import { C } from "./Constants";
import { Api } from "./Api";

export class Manage extends Api {
  constructor(uid) {
    super(uid);
  }

  recoverEmail() {
    if (this.ORM === C.ORM_DRIVERS) {
      return new Promise((resolve, reject) => {
        this.fetch({
          body: this.serialize(this),
          endpoint:
            C.API_ENDPOINT_RECOVER_EMAIL + this.parseQuery({ table: this.ORM }),
          method: "POST",
        })
          .then(() => resolve(true))
          .catch((error) => reject(error));
      });
    } else {
      return Promise.reject();
    }
  }

  auth() {
    if (this.ORM === C.ORM_ADMINS || this.ORM === C.ORM_DRIVERS) {
      return new Promise((resolve, reject) => {
        this.fetch({
          body: this.serialize(this),
          endpoint: C.API_ENDPOINT_AUTH + this.parseQuery({ table: this.ORM }),
          method: "POST",
        })
          .then((dto) => resolve(this.deserialize(dto)))
          .catch((error) => reject(error));
      });
    } else {
      return Promise.reject();
    }
  }

  post() {
    return new Promise((resolve, reject) => {
      this.fetch({
        body: this.serialize(this),
        endpoint: C.API_ENDPOINT_POST + this.parseQuery({ table: this.ORM }),
        method: "POST",
      })
        .then((dto) => resolve(this.deserialize(dto)))
        .catch((error) => reject(error));
    });
  }

  put(pointer) {
    return new Promise((resolve, reject) => {
      this.fetch({
        body: this.serialize(this),
        endpoint:
          C.API_ENDPOINT_PUT + this.parseQuery({ ...pointer, table: this.ORM }),
        method: "PUT",
      })
        .then((dto) => resolve(this.deserialize(dto)))
        .catch((error) => reject(error));
    });
  }

  get(pointer) {
    return new Promise((resolve, reject) => {
      this.fetch({
        endpoint:
          C.API_ENDPOINT_GET + this.parseQuery({ ...pointer, table: this.ORM }),
        method: "GET",
      })
        .then((dto) => resolve(this.deserialize(dto)))
        .catch((error) => reject(error));
    });
  }

  delete(pointer) {
    return new Promise((resolve, reject) => {
      this.fetch({
        endpoint:
          C.API_ENDPOINT_DELETE +
          this.parseQuery({ ...pointer, table: this.ORM }),
        method: "DELETE",
      })
        .then(() => resolve(true))
        .catch((error) => reject(error));
    });
  }
}

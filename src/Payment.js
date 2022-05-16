import { C } from "./Constants";
import { Manage } from "./Manage";

export class Payment extends Manage {
  constructor({ driverUID, name, ccn, ccv, exp, uid } = {}) {
    super(uid);
    this.driverUID = driverUID;
    this.name = name;
    this.ccn = ccn;
    this.ccv = ccv;
    this.exp = new Date(exp).toString();
    this.state = C.PAYMENT_ACTIVE;
    this.ORM = C.ORM_PAYMENTS;
  }

  modify({ name, ccn, ccv, exp } = {}) {
    this.name = name || this.name;
    this.ccn = ccn || this.ccn;
    this.ccv = ccv || this.ccv;
    this.exp = exp || this.exp;
    return this.put({ uid: this.uid });
  }

  register() {
    return this.post();
  }

  debit() {
    this.state = C.PAYMENT_PROCESSING;
    this.annotation = C.PAYMENT_ANNOTATION_DEBIT;
  }

  credit() {
    this.state = C.PAYMENT_PROCESSING;
    this.annotation = C.PAYMENT_ANNOTATION_CREDIT;
  }
}

import { C } from "./Constants";
import { Manage } from "./Manage";
interface IPaymentProps {
    uid: string;
    driverUID: string;
    name: string;
    ccn: string;
    ccv: string;
    exp: string;
    annotation: C.PAYMENT_ANNOTATION_CREDIT | C.PAYMENT_ANNOTATION_DEBIT;
    state: C.PAYMENT_ACTIVE | C.PAYMENT_PROCESSING | C.PAYMENT_SUCCESSFUL | C.PAYMENT_DECLINED;
}
export declare class Payment extends Manage {
    driverUID: IPaymentProps["driverUID"];
    name: IPaymentProps["name"];
    ccn: IPaymentProps["ccn"];
    ccv: IPaymentProps["ccv"];
    exp: IPaymentProps["exp"];
    state: IPaymentProps["state"];
    annotation: IPaymentProps["annotation"];
    constructor({ driverUID, name, ccn, ccv, exp, uid, }?: Partial<IPaymentProps>);
    modify({ name, ccn, ccv, exp }?: Partial<IPaymentProps>): Promise<Payment>;
    register(): Promise<Payment>;
    debit(): void;
    credit(): void;
}
export {};

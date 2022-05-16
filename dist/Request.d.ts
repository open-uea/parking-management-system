import { C } from "./Constants";
import { Manage } from "./Manage";
interface IRequestProps {
    uid: string;
    start: string;
    end: string;
    lotUID: string;
    paymentUID: string;
    spotType: C.SPOT_TYPE_STANDARD;
    state: C.REQUEST_PENDING | C.REQUEST_ACCEPTED | C.REQUEST_REJECTED | C.REQUEST_IN_USE | C.REQUEST_EXPIRED;
}
export declare class Request extends Manage {
    start: IRequestProps["start"];
    end: IRequestProps["end"];
    state: IRequestProps["state"];
    spotType: IRequestProps["spotType"];
    lotUID: IRequestProps["lotUID"];
    paymentUID: IRequestProps["paymentUID"];
    constructor({ lotUID, paymentUID, start, end, spotType, uid, }?: Partial<IRequestProps>);
    modify({ state }?: Partial<IRequestProps>): Promise<Request>;
    send(): Promise<Request>;
    accept(): Promise<Request>;
    reject(): Promise<Request>;
    automate(): Promise<Request>;
    cost(): number;
    checkIn(): Promise<unknown>;
    checkOut(): Promise<unknown>;
    toString(): Promise<string>;
    _formatDate(date: any): string;
}
export {};

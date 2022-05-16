import { C } from "./Constants";
export interface IApiProps {
    ORM: C.ORM_ADMINS | C.ORM_DRIVERS | C.ORM_LOTS | C.ORM_MESSAGES | C.ORM_NOTIFICATIONS | C.ORM_REQUESTS | C.ORM_PAYMENTS;
    uid: string;
}
interface IFetchProps {
    body: String;
    endpoint: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
}
export declare class Api {
    mem: any;
    ORM: IApiProps["ORM"];
    uid: IApiProps["uid"];
    constructor(uid?: IApiProps["uid"]);
    protected deserializeArray<T>(dtoList: Object[]): T[];
    protected deserialize<T>(dto: Object): T;
    protected serialize(cls: Object): String;
    protected parseQuery(arg?: {}): URLSearchParams;
    protected fetch({ body, endpoint, method }: Partial<IFetchProps>): Promise<any>;
}
export {};

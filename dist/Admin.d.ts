import { C } from "./Constants";
import { Manage } from "./Manage";
interface IAdminProps {
    uid: string;
    name: string;
    password: string;
    state: C.ADMIN_STATE_ONLINE | C.ADMIN_STATE_OFFLINE;
}
export declare class Admin extends Manage {
    name: IAdminProps["name"];
    password: IAdminProps["password"];
    state: IAdminProps["state"];
    constructor({ name, password, uid }?: Partial<IAdminProps>);
    modify({ name, password, state }?: Partial<IAdminProps>): Promise<Admin>;
    register(): Promise<Admin>;
    login(): Promise<unknown>;
    logout(): void;
}
export {};

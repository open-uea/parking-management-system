import { C } from "./Constants";
import { Manage } from "./Manage";
interface IDriverProps {
    uid: string;
    name: string;
    email: string;
    password: string;
    state: C.DRIVER_STATE_ACTIVE | C.DRIVER_STATE_BANNED;
}
export declare class Driver extends Manage {
    name: IDriverProps["name"];
    email: IDriverProps["email"];
    password: IDriverProps["password"];
    state: IDriverProps["state"];
    constructor({ name, email, password, uid }?: Partial<IDriverProps>);
    modify({ name, email, password, state }?: Partial<IDriverProps>): Promise<Driver>;
    register(): Promise<Driver>;
    login(): Promise<Driver>;
    recover(): Promise<boolean>;
    toggleBan(): Promise<Driver>;
    logout(): void;
}
export {};

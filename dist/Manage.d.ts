import { Api } from "./Api";
interface IPointer {
    [key: string]: string;
}
export declare class Manage extends Api {
    constructor(uid: string);
    protected recoverEmail(): Promise<boolean>;
    protected auth<T>(): Promise<T>;
    protected post<T>(): Promise<T>;
    protected put<T>(pointer: IPointer): Promise<T>;
    get<T>(pointer: IPointer): Promise<T>;
    delete(pointer: IPointer): Promise<boolean>;
}
export {};

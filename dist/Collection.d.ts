import { Api, IApiProps } from "./Api";
export declare class Collection extends Api {
    constructor(dbTable: IApiProps["ORM"]);
    then<T>(func: (arg: T[]) => T[]): Promise<T[]>;
}

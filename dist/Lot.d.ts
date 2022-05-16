import { C } from "./Constants";
import { Manage } from "./Manage";
interface ISpotProps {
    uid: string;
    type: C.SPOT_TYPE_STANDARD;
    state: C.SPOT_STATE_OPENED | C.SPOT_STATE_RESERVED | C.SPOT_STATE_OCCUPIED;
}
interface ILotProps {
    uid: string;
    name: string;
    coordinate: string;
    capacity: number;
    spots: ISpotProps[];
    state: C.LOT_STATE_OPENED | C.LOT_STATE_CLOSED;
}
export declare class Lot extends Manage {
    name: ILotProps["name"];
    state: ILotProps["state"];
    spots: ILotProps["spots"];
    coordinate: ILotProps["coordinate"];
    constructor({ name, coordinate, capacity, uid }?: Partial<ILotProps>);
    modify({ name, coordinate, state, spots }?: Partial<ILotProps>): Promise<Lot>;
    register(): Promise<Lot>;
    isTypeAvailable({ type }: {
        type: any;
    }): number;
    getCapacity(): number;
    getSpot({ uid }: {
        uid: any;
    }): ISpotProps;
    openSpot({ uid }: {
        uid: any;
    }): Promise<Lot>;
    reserveSpot({ uid }: {
        uid: any;
    }): Promise<Lot>;
    occupySpot({ uid }: {
        uid: any;
    }): Promise<Lot>;
    occupyRandomSpot(): Promise<Lot>;
    releaseRandomSpot(): Promise<Lot>;
    _instSpots({ capacity }: {
        capacity: any;
    }): ISpotProps[];
}
export {};

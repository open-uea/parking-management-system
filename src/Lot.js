import { C } from "./Constants";
import { Manage } from "./Manage";

export class Lot extends Manage {
  constructor({ name, coordinate, capacity, uid } = {}) {
    super(uid);
    this.name = name;
    this.coordinate = coordinate;
    this.state = C.LOT_STATE_OPENED;
    this.ORM = C.ORM_LOTS;
    this.spots = this._instSpots({ capacity });
  }

  modify({ name, coordinate, state, spots } = {}) {
    this.coordinate = coordinate || this.coordinate;
    this.name = name || this.name;
    this.state = state || this.state;
    this.spots = spots || this.spots;
    return this.put({ uid: this.uid });
  }

  register() {
    return this.post();
  }

  isTypeAvailable({ type }) {
    return this.spots.filter((spot) => spot.type === type).length;
  }

  getCapacity() {
    return this.spots.length;
  }

  getSpot({ uid }) {
    return this.spots.filter((spot) => spot.uid === uid)[0];
  }

  openSpot({ uid }) {
    for (const spot of this.spots) {
      if (spot.uid === uid) {
        spot.state = C.SPOT_STATE_OPENED;
        break;
      }
    }
    return this.modify();
  }

  reserveSpot({ uid }) {
    for (const spot of this.spots) {
      if (spot.uid === uid) {
        spot.state = C.SPOT_STATE_RESERVED;
        break;
      }
    }
    return this.modify();
  }

  occupySpot({ uid }) {
    for (const spot of this.spots) {
      if (spot.uid === uid) {
        spot.state = C.SPOT_STATE_OCCUPIED;
        break;
      }
    }
    return this.modify();
  }

  occupyRandomSpot() {
    // TODO:
    // technical debt implement a proper check in base on request object
    for (const spot of this.spots) {
      if (spot.state === C.SPOT_STATE_OPENED) {
        spot.state = C.SPOT_STATE_OCCUPIED;
        break;
      }
    }
    return this.modify();
  }

  releaseRandomSpot() {
    // TODO:
    // technical debt implement a proper check in base on request object
    for (const spot of this.spots) {
      if (spot.state === C.SPOT_STATE_OCCUPIED) {
        spot.state = C.SPOT_STATE_OPENED;
        break;
      }
    }
    return this.modify();
  }

  _instSpots({ capacity }) {
    let list = [];
    for (let i = 0; i < capacity; i++) {
      list.push({
        uid: Math.random().toString(16).slice(2),
        type: C.SPOT_TYPE_STANDARD,
        state: C.SPOT_STATE_OPENED,
      });
    }
    return list;
  }
}

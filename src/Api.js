import { C } from "./Constants";
import { M } from "./Mock";
import { ObjectMapper } from "./vendors";

export class Api {
  mem;
  ORM;
  uid;

  constructor(uid = null) {
    this.uid = uid || Math.random().toString(16).slice(2);
  }

  deserializeArray(dtoList) {
    return ObjectMapper.deserializeArray(this.constructor, dtoList);
  }

  deserialize(dto) {
    return ObjectMapper.deserialize(this.constructor, dto);
  }

  serialize(cls) {
    return ObjectMapper.serialize(cls);
  }

  parseQuery(arg = {}) {
    return new URLSearchParams({ ...arg });
  }

  fetch({ body = null, endpoint, method }) {
    // return fetch(endpoint, {
    //   method,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   ...(body ? { body } : {}),
    // })
    //   .then((response) => response.json())
    //   .then((data) => JSON.parse(data))
    //   .catch((error) => console.error(error));

    // TODO:
    // using mock backend (tech debt)
    return Promise.resolve(M.backend({ body, endpoint }));
  }
}

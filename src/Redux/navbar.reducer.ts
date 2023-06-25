interface payloadType {
  type: string;
  payload: any;
}
import { NAVFILTER}  from "./navbar.action"
 
const inital = {
  value:""
};

const NavReducer = (state = inital, { type, payload }: payloadType) => {
  switch (type) {
    case NAVFILTER:
      return { value: payload };
    default:
      return state;
  }
};

export default NavReducer;

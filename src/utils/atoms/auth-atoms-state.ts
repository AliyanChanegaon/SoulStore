import { RecoilState, atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export type UserDetailsProps = {
  isAuth: boolean;
  userName: string;
};

const defaultUserDetails = {
  isAuth: false,
  userName: "",
};

const UserDetailAtom = atom<UserDetailsProps>({
  key: "userDetails",
  default: defaultUserDetails,
  effects_UNSTABLE: [persistAtom],
});

const UserDetailAtomSelector: RecoilState<UserDetailsProps> = selector({
  key: "userDetailsSelector",
  get: ({ get }) => get(UserDetailAtom),
  set: ({ set }, newValue) => set(UserDetailAtom, newValue),
});

export default UserDetailAtomSelector;

// import { atom } from "recoil";

// export type UserDetailsProps = {
//   isAuth: boolean;
//   userName: string;
// };

// const defaultUserDetails = {
//   isAuth: false,
//   userName: "",
// };

// export const UserDetailAtom = atom<UserDetailsProps>({
//   key: "userDetails",
//   default: defaultUserDetails,
// });

// export default UserDetailAtom;

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import UserDetailAtom, {
  UserDetailsProps,
} from "../utils/atoms/auth-atoms-state";

interface childrenProp {
  children: JSX.Element | ReactNode;
}

export default function PrivateRoute({ children }: childrenProp) {
  const [UserDetails] = useRecoilState<UserDetailsProps>(UserDetailAtom);

  return (
    <>
      {UserDetails.isAuth ? (
        children
      ) : (
        <>
          {alert("You Need To Login First")}
          <Navigate to="/login" />
        </>
      )}
    </>
  );
}

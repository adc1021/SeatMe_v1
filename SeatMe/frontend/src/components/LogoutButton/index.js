import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(sessionActions.logout());

  }
  return (
    <>
      <button onClick={handleLogout}>Sign Out</button>
    </>
  )
}

export default LogoutButton;

import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div style={{ padding: "20px" }}>Please log in</div>;

  return <div style={{ padding: "20px" }}>Welcome {user.username}</div>;
}

export default Profile;

import React from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext value={{ user, setUser }}>
      {/* object given inside curly braces(it is the value that will be provided to any component that consumes this context. */}
      {children}
    </UserContext>
  );
}

export default UserContextProvider;

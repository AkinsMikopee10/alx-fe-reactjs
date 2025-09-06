import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserDetails = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
};

export default UserDetails;

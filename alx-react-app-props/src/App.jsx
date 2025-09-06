import React from "react";
import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const userData = {
    name: "Michael Akinyemi",
    email: "michael.akinyemi@example.com",
    role: "Frontend Developer",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

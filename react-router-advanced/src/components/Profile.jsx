import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>

      {/* Navigation for nested routes */}
      <nav style={{ marginBottom: "10px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes defined inside Profile.jsx */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;

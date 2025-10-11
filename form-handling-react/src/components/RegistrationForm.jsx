import React, { useState } from "react";

function RegistrationForm() {
  // Step 1: create state variables for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Step 2: handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Step 3: basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // If validation passes, show success in console for now
    console.log("Form submitted successfully!");
    console.log({ username, email, password });

    // clear form
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Registration</h2>

      {/* show validation error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

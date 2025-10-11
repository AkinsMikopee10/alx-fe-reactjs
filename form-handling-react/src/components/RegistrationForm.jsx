import React, { useState } from "react";

function RegistrationForm() {
  // form field states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // store validation errors as an object
  const [errors, setErrors] = useState({});

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new object to store errors
    const newErrors = {};

    // individual field checks
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    // update error state
    setErrors(newErrors);

    // stop if there are any errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // log form data if valid
    console.log("Form submitted successfully!");
    console.log({ username, email, password });

    // clear form
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

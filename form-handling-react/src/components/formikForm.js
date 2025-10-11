import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Step 1: Define initial values for the form
const initialValues = {
  username: "",
  email: "",
  password: "",
};

// Step 2: Define validation rules using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Step 3: Define the component
function FormikForm() {
  // Step 4: Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted successfully!");
    console.log(values);

    // clear fields after successful submit
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* Step 5: Use Formik’s Form, Field, and ErrorMessage components */}
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label>
            <Field type="text" name="username" placeholder="Enter username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;

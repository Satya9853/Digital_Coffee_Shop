import React, { useState } from "react";
import { Formik, Form } from "formik";

import "./RegisterForm.css";

const RegisterForm = ({ setSignUpMode }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div>
      <div className="signup_background">
        <div className="auth_header">SIGN UP</div>
        <Formik initialValues={{ ...userData }} enableReinitialize={true}>
          {() => {
            return (
              <Form>
                <input placeholder="First Name" />
                <input placeholder="Last Name" />
                <input placeholder="Email" />
                <input placeholder="Enter Password..." />
                <input placeholder="Confirm Password..." />
                <button className="signup_button">SIGN UP</button>
                <div className="login_text">
                  HAVE AN ACCOUNT? <span onClick={() => setSignUpMode(false)}>Login</span>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;

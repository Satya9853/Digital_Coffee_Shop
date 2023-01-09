import React, { useState } from "react";
import { Formik, Form } from "formik";

import "./LoginForm.css";

function LoginForm(props) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const signUphandler = () => {};

  return (
    <div>
      <div className="auth_parent_background"> </div>
      <div className="auth_child_background">
        <div className="auth_header">SIGN IN</div>
        <Formik initialValues={{ email: inputEmail, password: inputPassword }} enableReinitialize={true}>
          {() => {
            return (
              <Form>
                <input placeholder="Email" />
                <input placeholder="Enter Password..." />
                <button className="log_in_button">Log In</button>
                <div className="sign_in_text">
                  DONT HAVE AN ACCOUNT? <span>SIGN UP</span>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;

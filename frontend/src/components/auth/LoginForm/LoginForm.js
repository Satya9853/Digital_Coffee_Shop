import React, { useState } from "react";
import { Formik, Form } from "formik";

import "./LoginForm.css";

function LoginForm({ setSignUpMode }) {
  const [userLoginData, setUserLoginData] = useState({ email: "", password: "" });

  return (
    <div>
      <div className="login_background">
        <div className="auth_header">SIGN IN</div>
        <Formik initialValues={{ ...userLoginData }} enableReinitialize={true}>
          {() => {
            return (
              <Form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password..." />
                <button className="log_in_button">Log In</button>
                <div className="sign_up_text">
                  DONT HAVE AN ACCOUNT? <span onClick={() => setSignUpMode(true)}>SIGN UP</span>
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

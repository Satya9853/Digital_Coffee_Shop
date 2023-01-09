import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

import "./Auth.css";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";

function Auth(props) {
  const [signUpMode, setSignUpMode] = useState(false);
  return (
    <div className="auth_parent_background">
      {!signUpMode && <LoginForm setSignUpMode={setSignUpMode} />}
      {signUpMode && <RegisterForm setSignUpMode={setSignUpMode} />}
    </div>
  );
}

export default Auth;

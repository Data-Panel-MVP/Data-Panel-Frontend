import { useRef, useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./LoginSignupContainer.css";

const LoginSignupContainer = () => {
  const [login, setLogin] = useState(true);
  const loginSignupContainerRef = useRef(null);

  const handleClick = () => {
    setLogin(!login);
    loginSignupContainerRef.current.classList.toggle("active");
  };
  return (
    <div className="login-Signup-container" ref={loginSignupContainerRef}>
      <Login />
      <div className="side-div">
        <p>
          {login ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={handleClick}>
            {login ? "Signup" : "Login"}
          </button>
        </p>
      </div>
      <Signup />
    </div>
  );
};

export default LoginSignupContainer;

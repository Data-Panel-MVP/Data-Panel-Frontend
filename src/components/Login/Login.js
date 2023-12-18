import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const user = {email, password };
    console.log(user)
   try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        user
      );
      const data = response?.data;
      console.log(data);
      navigate("/category");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <div className="group">
          <label style={{ color: "black" }} htmlFor="email">
            Email
          </label>
          <input
            type={"email"}
            placeholder={"Enter your Email"}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="group">
          <label htmlFor="password" style={{ color: "black" }}>
            Password
          </label>
          <input
            type={"password"}
            placeholder={"Enter your Password"}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="addtext">
          <p>*Forget Password</p>
        </div>
        <button onClick={login} type={"submit"}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;

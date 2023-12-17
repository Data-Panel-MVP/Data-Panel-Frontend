import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    try {
      let user = { username, email, password };
      console.warn(user);

      const response = await axios.post(
        "http://localhost:4000/users/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/category");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <div className="group">
          <label style={{ color: "black" }} htmlFor="name">
            Name
          </label>
          <input
            type={"name"}
            placeholder={"Enter your Name"}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="group">
          <label style={{ color: "black" }} htmlFor="email">
            Email
          </label>
          <input
            type={"email"}
            placeholder={"Enter your Email"}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
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
          />
        </div>
        <button onClick={signUp} type={"submit"}>
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default Signup;

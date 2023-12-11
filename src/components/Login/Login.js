import "./Login.css";

const Login = () => {
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
          />
        </div>
        <div className="addtext">
          <p>*Forget Password</p>
        </div>
        <button type={"submit"}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;

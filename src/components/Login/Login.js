import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
      let user = { email, password };
      console.warn(user);

      const response = await axios.post(
        "http://localhost:4000/users/login",
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
        <div className="addtext">
          <p>*Forget Password</p>
        </div>
        <button onClick={login} type={"submit"}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;

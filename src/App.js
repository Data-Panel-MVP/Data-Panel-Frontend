import "./App.css";
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer";
import logo from "./logo.png";

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <div class="side">
          <h1>
            <img src={logo} alt="Logo" />
          </h1>
        </div>
        <h1>PLYPICKER</h1>
      </div>
      <LoginSignupContainer />
    </div>
  );
};

export default App;

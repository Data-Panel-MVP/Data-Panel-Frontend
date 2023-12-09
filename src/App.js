import "./App.css";
import LoginSignupContainer from "./components/global/LoginSignupContainer/LoginSignupContainer";
import logo from "./logo.png";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/local/Login/Login";
import Signup from "./components/local/Signup/Signup";
import Category from "./components/local/Category/Category";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./containers/ProductPage.js";
import WelcomePage from "./containers/WelcomePage.js";
import MainBar from "./components/MainBar";
import SignUp from "./containers/SignUp";
import { useState } from "react";

import Cookies from "js-cookie";
import LogIn from "./containers/LogIn.js";
function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  async function authenticate() {
    if (isAuthenticated) {
      Cookies.remove("token");
    }
    setIsAuthenticated(!isAuthenticated);
  }
  return (
    <Router>
      <MainBar isAuthenticated={isAuthenticated} authenticate={authenticate} />
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/offer/:id">
          <ProductPage />
        </Route>
        <Route path="/signup">
          <SignUp authenticate={authenticate} />
        </Route>
        <Route path="/login">
          <LogIn authenticate={authenticate} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

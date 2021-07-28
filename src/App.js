import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./containers/ProductPage.js";
import WelcomePage from "./containers/WelcomePage.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/offer/:id">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

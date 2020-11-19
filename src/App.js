import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/App/Checkout";
import Header from "./Components/App/Header";
import Home from "./Components/App/Home";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

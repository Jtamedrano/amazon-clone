import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/App/Checkout";
import Header from "./Components/App/Header";
import Home from "./Components/App/Home";
import Login from "./Components/App/Login";

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
              <Login />
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

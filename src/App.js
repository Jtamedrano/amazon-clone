import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/App/Checkout";
import Header from "./Components/App/Header";
import Home from "./Components/App/Home";
import Login from "./Components/App/Login";
import Signup from "./Components/App/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);
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
            <Route path="/signup">
              <Signup />
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

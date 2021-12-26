import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllPost from "./components/AllPost/AllPost";
import SinglePost from "./components/SinglePost/SinglePost";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <AllPost />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/:id">
            <SinglePost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

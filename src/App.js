import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPost from "./components/AllPost/AllPost";
import SinglePost from "./components/SinglePost/SinglePost";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/posts" exact>
            <AllPost />
          </Route>
          <Route path="/posts/:id">
            <SinglePost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

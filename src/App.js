import "./App.css";

import Information from "./component/information";
import Inquiry from "./component/inquiry";
import Inquirycomplete from "./component/complete";
import Home from "./component/home";
import SignUp from "./component/signUp";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { browserhistory } from "react-router";
import history from "./component/history";

const App = () => {
  return (
    <Router>
      <header>Football Club</header>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inquiry">Inquiry</Link>
            </li>
            <li>
              <Link to="/information">Users</Link>
            </li>
            <li>
              <Link to="/signUp">会員登録</Link>
            </li>
          </ul>
        </nav>

        <Switch history={history}>
          <Route path="/information" component={Information} />
          <Route exact path="/inquiry" component={Inquiry} />
          <Route path="/inquiry/complete" component={Inquirycomplete} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
        <footer>@Sora Hoshino All Rights Reserved.</footer>
      </div>
    </Router>
  );
};

// const Home = () => {
//   return <h2>Home</h2>;
// }

// const About = () => {
//   return <h2>About</h2>;
// }

// const Users = () => {
//   return <h2>Users</h2>;
// }

export default App;

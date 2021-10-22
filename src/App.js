import "./App.css";

import Information from "./component/information";
import Inquiry from "./component/inquiry";
import Inquirycomplete from "./component/complete";
import Home from "./component/home";
import SignUp from "./component/signUp";
import ToDo from "./component/addTodo/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import combineReducers from "./core/slice/reducers/information/index";
import rootReducer from "./reducer/index";
import YoutubeList from "./component/youtube";
import { Menu } from "./menu";
import InquiryRouter from "./router/inquiry-route";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Menu></Menu>
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
              <li>
                <Link to="/add-todo">やることリスト</Link>
              </li>
              <li>
                <Link to="/youtube">YouTube</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/information" component={Information} />
            <Route path="/inquiry" component={InquiryRouter} />
            {/* <Route exact path="/inquiry" component={Inquiry} />
            <Route path="/inquiry/complete" component={Inquirycomplete} /> */}
            <Route path="/signUp" component={SignUp} />
            <Route path="/add-todo" component={ToDo} />
            <Route path="/youtube" component={YoutubeList} />

            <Route path="/" component={Home} />
          </Switch>
          <footer>@Sora Hoshino All Rights Reserved.</footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

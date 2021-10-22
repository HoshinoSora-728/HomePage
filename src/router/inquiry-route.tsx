import Inquiry from "../component/inquiry";
import Inquirycomplete from "../component/complete";

// import { Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const InquiryRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/inquiry" component={Inquiry} />
        <Route path="/inquiry/complete" component={Inquirycomplete} />
      </Switch>
    </Router>
  );
};

export default InquiryRouter;

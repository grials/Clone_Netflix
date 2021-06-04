import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import ROUTES from "./routert/rotues";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import "./StyleApp.scss";
import NotFound404 from "./component/NotFound404";
import PrivateRoute from "./routert/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_IN} component={Signin} />
        <Route path={ROUTES.SIGN_UP.MAIN} component={Signup} />
        {/* <Route exact path={ROUTES.BROWSE} component={Browse} /> */}
        <PrivateRoute exact path={ROUTES.BROWSE}>
          <Browse />
        </PrivateRoute>
        <Route path={ROUTES.NOT_FOUND_404} component={NotFound404} />
      </Switch>
    </div>
  );
}

export default App;

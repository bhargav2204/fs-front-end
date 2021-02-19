import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../helpers/route/history";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("../containers/DefaultLayout/index"));
const SignIn = React.lazy(() => import("../components/project-manager/index"));
const ProtectedRoute = React.lazy(() => import("../helpers/route/ProtectedRoute"));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Redirect from="/" exact to="/dashboard" />
            <Route path="/projectmanager" name="Login Page" component={SignIn} />
            {/* <ProtectedRoute path="/dashboard" component={DefaultLayout} />
            <ProtectedRoute path="/" component={DefaultLayout} /> */}
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;

import React, { Component, Suspense } from "react";
import {Route, Switch } from "react-router-dom";
import Routes from "../../helpers/route/routes";
// import history from "../../helpers/route/history";


import Header from "../header/index";

// function resolveCurrentUrl() {
//   return history.location.pathname.split("/")[1] || "dashboard";
// }

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div>
        <Header />

        <div>
          <Suspense fallback={this.loading()}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              {/* <Redirect from="/" to="/signin" /> */}
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;

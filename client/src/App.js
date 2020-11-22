import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/common/PrivateRoute";

import Landing from "./components/landing/Landing";
import Footer from "./components/layout/Footer";
import Aboutus from "./components/aboutus/Aboutus";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import Diabetes from "./components/data/Diabetes";
import Liver from "./components/data/Liver";
import Kidney from "./components/data/Kidney";
import Heart from "./components/data/Heart";
import Malaria from "./components/data/Malaria";
import Covid from "./components/data/Covid";
import Resultdiabetes from "./components/result/Resultdiabetes";
import Resultliver from "./components/result/Resultliver";
import Resultkidney from "./components/result/Resultkidney";
import Resultheart from "./components/result/Resultheart";
import Resultmalaria from "./components/result/Resultmalaria";
import Resultcovid from "./components/result/Resultcovid";

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about-us" component={Aboutus} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/diabetes" component={Diabetes} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/liver" component={Liver} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/kidney" component={Kidney} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/heart" component={Heart} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/malaria" component={Malaria} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/covid" component={Covid} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/diabetes"
                component={Resultdiabetes}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/liver"
                component={Resultliver}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/kidney"
                component={Resultkidney}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/heart"
                component={Resultheart}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/malaria"
                component={Resultmalaria}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/result/covid"
                component={Resultcovid}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

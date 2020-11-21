import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import classnames from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
    };
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onAboutUsClick = this.onAboutUsClick.bind(this);
    this.onDashboardClick = this.onDashboardClick.bind(this);
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  onProfileClick() {
    this.setState({
      active: "profile",
    });
  }

  onAboutUsClick() {
    this.setState({
      active: "aboutus",
    });
  }
  onDashboardClick() {
    this.setState({
      active: "dashboard",
    });
  }
  onSignInClick() {
    this.setState({
      active: "signin",
    });
  }
  onSignUpClick() {
    this.setState({
      active: "signup",
    });
  }
  onHomeClick() {
    this.setState({
      active: "home",
    });
  }

  render() {
    const authLinks = (
      <ul>
        <li
          onClick={this.onDashboardClick}
          className={classnames({
            active: this.state.active === "dashboard",
          })}
        >
          <a href="index.html">Dashboard</a>
        </li>
        <li
          onClick={this.onProfileClick}
          className={classnames({
            active: this.state.active === "profile",
          })}
        >
          <a href="#about">Profile</a>
        </li>
        <li
          onClick={this.onAboutUsClick}
          className={classnames({
            active: this.state.active === "aboutus",
          })}
        >
          <a href="#services">About Us</a>
        </li>
        <li>
          <a href="#portfolio" onClick={this.onLogoutClick.bind(this)}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li
          onClick={this.onHomeClick}
          className={classnames({
            active: this.state.active === "home",
          })}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={this.onSignInClick}
          className={classnames({
            active: this.state.active === "signin",
          })}
        >
          <Link to="/login">Sign in</Link>
        </li>
        <li
          onClick={this.onSignUpClick}
          className={classnames({
            active: this.state.active === "signup",
          })}
        >
          <Link to="/register">Sign up</Link>
        </li>
        <li
          onClick={this.onAboutUsClick}
          className={classnames({
            active: this.state.active === "aboutus",
          })}
        >
          <a href="#services">About Us</a>
        </li>
      </ul>
    );
    return (
      <div>
        <header id="header">
          <div class="container d-flex">
            <div class="logo mr-auto">
              <h1 class="text-light">
                <a href="index.html">
                  <span>Virtual Doc</span>
                </a>
              </h1>
            </div>

            <nav class="nav-menu d-none d-lg-block">
              {this.props.auth.isAuthenticated ? authLinks : guestLinks}
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);

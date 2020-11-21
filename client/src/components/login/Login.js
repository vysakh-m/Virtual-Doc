import React, { Component } from "react";
import classnames from "classnames";
import "../../styles/login_style.css";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user, this.props.history);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    return (
      <div class="custom_bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form
                    className="form-signin"
                    novalidate
                    onSubmit={this.onSubmit}
                  >
                    <div className="form-label-group">
                      <input
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                        id="inputEmail"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.email,
                        })}
                        placeholder="Email address"
                        required
                        autofocus
                      />
                      {this.state.errors.email && (
                        <div className="invalid-feedback text-justify">
                          {" "}
                          {this.state.errors.email}{" "}
                        </div>
                      )}
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        onChange={this.onChange}
                        value={this.state.password}
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.password,
                        })}
                        placeholder="Password"
                        required
                      />
                      {this.state.errors.password && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.password}{" "}
                        </div>
                      )}
                      <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-dark btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));

import React, { Component } from "react";
import "../../styles/register_style.css";
import classnames from "classnames";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import Footer from "../layout/Footer";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      district: "",
      state: "",
      number: "",
      email: "",
      password: "",
      password1: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      age: this.state.age,
      state: this.state.state,
      district: this.state.district,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1,
    };
    this.props.registerUser(newUser, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    return (
      <div className="custom_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputUserame"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.name,
                        })}
                        name="name"
                        placeholder="Name"
                        onChange={this.onChange}
                        value={this.state.name}
                        autoFocus
                      />
                      {this.state.errors.name && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.name}{" "}
                        </div>
                      )}
                      <label htmlFor="inputUserame">Name</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="number"
                        id="inputAge"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.age,
                        })}
                        name="age"
                        placeholder="Age"
                        onChange={this.onChange}
                        value={this.state.age}
                        autoFocus
                      />
                      {this.state.errors.age && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.age}{" "}
                        </div>
                      )}
                      <label htmlFor="inputAge">Age</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputDistrict"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.district,
                        })}
                        name="district"
                        placeholder="District"
                        onChange={this.onChange}
                        value={this.state.district}
                        autoFocus
                      />
                      {this.state.errors.district && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.district}{" "}
                        </div>
                      )}
                      <label htmlFor="inputDistrict">District</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputState"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.state,
                        })}
                        name="state"
                        placeholder="State"
                        onChange={this.onChange}
                        value={this.state.state}
                        autoFocus
                      />
                      {this.state.errors.state && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.state}{" "}
                        </div>
                      )}
                      <label htmlFor="inputState">State</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="tel"
                        id="inputNumber"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.number,
                        })}
                        name="number"
                        placeholder="Number"
                        onChange={this.onChange}
                        value={this.state.number}
                        maxLength="10"
                        autoFocus
                      />
                      {this.state.errors.number && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.number}{" "}
                        </div>
                      )}
                      <label htmlFor="inputNumber">Number</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.email,
                        })}
                        placeholder="Email address"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                      {this.state.errors.email && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.email}{" "}
                        </div>
                      )}
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <hr />

                    <div className="form-label-group">
                      <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.password,
                        })}
                        placeholder="Password"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                      {this.state.errors.password && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.password}{" "}
                        </div>
                      )}
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputConfirmPassword"
                        name="password1"
                        className={classnames("form-control", {
                          "is-invalid": this.state.errors.password1,
                        })}
                        placeholder="Confirm Password"
                        onChange={this.onChange}
                        value={this.state.password1}
                      />
                      {this.state.errors.password1 && (
                        <div className="invalid-feedback">
                          {" "}
                          {this.state.errors.password1}{" "}
                        </div>
                      )}
                      <label htmlFor="inputConfirmPassword">
                        Confirm password
                      </label>
                    </div>

                    <button
                      className="btn btn-lg btn-dark btn-block text-uppercase"
                      type="submit"
                    >
                      Register
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

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

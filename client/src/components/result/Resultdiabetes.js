import React, { Component } from "react";

export default class Resultdiabetes extends Component {
  render() {
    const good = (
      <h4 style={{ textAlign: "center" }}>Congrats! You are Normal.</h4>
    );
    const bad = (
      <h4 style={{ textAlign: "center" }}>Sorry! You are diabetic</h4>
    );
    const result = this.props.location.state["val"];
    return (
      <div>
        <div className="container-contact100">
          <div className="wrap-contact100">
            <span className="contact100-form-title"> RESULT </span>
            {result > 0.5 ? good : bad}
          </div>
        </div>
      </div>
    );
  }
}

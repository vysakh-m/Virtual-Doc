import React, { Component } from "react";
import "../../styles/data_style_a.css";
import "../../styles/data_style_b.css";
import axios from "axios";
export default class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cp: "",
      slope: "",
      restecg: "",
      thalach: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      cp: this.state.cp,
      slope: this.state.slope,
      restecg: this.state.restecg,
      thalach: this.state.thalach,
    };

    axios
      .post("/result/heart", data)
      .then((res) =>
        this.props.history.push({
          pathname: "/result/heart",
          state: { val: res["data"]["result"] },
        })
      )
      .catch((err) => console.log(err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="container-contact100">
          <div className="wrap-contact100">
            <form
              className="contact100-form validate-form"
              onSubmit={this.onSubmit}
            >
              <span className="contact100-form-title">
                {" "}
                Heart Disease Detection{" "}
              </span>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">CP </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.cp}
                  name="cp"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Slope </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.slope}
                  name="slope"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Rest ECG</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.restecg}
                  name="restecg"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Thalach</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.thalach}
                  name="thalach"
                />
              </div>

              <div className="container-contact100-form-btn">
                <button className="contact100-form-btn">
                  <span>
                    Submit
                    <i
                      className="fa fa-long-arrow-right m-l-7"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

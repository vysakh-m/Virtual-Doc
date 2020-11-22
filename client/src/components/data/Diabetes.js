import React, { Component } from "react";
import "../../styles/data_style_a.css";
import "../../styles/data_style_b.css";
import axios from "axios";
export default class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pregnancies: "",
      glucose: "",
      bloodpressure: "",
      skinthickness: "",
      insulin: "",
      bmi: "",
      dpf: "",
      age: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      pregnancies: this.state.pregnancies,
      glucose: this.state.glucose,
      bloodpressure: this.state.bloodpressure,
      skinthickness: this.state.skinthickness,
      insulin: this.state.insulin,
      bmi: this.state.bmi,
      dpf: this.state.dpf,
      age: this.state.age,
    };

    axios
      .post("/result/diabetes", data)
      .then((res) =>
        this.props.history.push({
          pathname: "/result/diabetes",
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
                Diabetes Diagnosis{" "}
              </span>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Pregnancies </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.pregnancies}
                  name="pregnancies"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Glucose </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.glucose}
                  name="glucose"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Blood Pressure</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.bloodpressure}
                  name="bloodpressure"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Skin Thickness</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.skinthickness}
                  name="skinthickness"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Insulin</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.insulin}
                  name="insulin"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">BMI</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.bmi}
                  name="bmi"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  Diabetes Pedigree Function{" "}
                </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.dpf}
                  name="dpf"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Age</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.age}
                  name="age"
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

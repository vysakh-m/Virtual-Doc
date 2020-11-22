import React, { Component } from "react";
import "../../styles/data_style_a.css";
import "../../styles/data_style_b.css";
import axios from "axios";
export default class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      gender: "",
      total_bilirubin: "",
      direct_bilirubin: "",
      alkaline_phosphotase: "",
      alamine_aminotransferase: "",
      aspartate_aminotransferase: "",
      total_protiens: "",
      albumin: "",
      agr: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      age: this.state.age,
      gender: this.state.gender,
      total_bilirubin: this.state.total_bilirubin,
      direct_bilirubin: this.state.direct_bilirubin,
      alkaline_phosphotase: this.state.alkaline_phosphotase,
      alamine_aminotransferase: this.state.alamine_aminotransferase,
      aspartate_aminotransferase: this.state.aspartate_aminotransferase,
      total_protiens: this.state.total_protiens,
      albumin: this.state.albumin,
      agr: this.state.agr,
    };

    axios
      .post("/result/liver", data)
      .then((res) =>
        this.props.history.push({
          pathname: "/result/liver",
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
                Liver Disease Detection{" "}
              </span>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Age </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.age}
                  name="age"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Gender </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.gender}
                  name="gender"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Total Bilirubin</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.total_bilirubin}
                  name="total_bilirubin"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Direct Bilirubin</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.direct_bilirubin}
                  name="direct_bilirubin"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Alkaline Phosphotase</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.alkaline_phosphotase}
                  name="alkaline_phosphotase"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Alamine Aminotransferase</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.alamine_aminotransferase}
                  name="alamine_aminotransferase"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  Aspartate Aminotransferase{" "}
                </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.aspartate_aminotransferase}
                  name="aspartate_aminotransferase"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Total Protiens</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.total_protiens}
                  name="total_protiens"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Albumin</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.albumin}
                  name="albumin"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">
                  Albumin and Globulin Ratio
                </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.agr}
                  name="agr"
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

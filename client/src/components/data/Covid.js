import React, { Component } from "react";
import "../../styles/data_style_a.css";
import "../../styles/data_style_b.css";
import axios from "axios";
export default class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
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

    // axios
    //   .post("/result/heart", data)
    //   .then((res) =>
    //     this.props.history.push({
    //       pathname: "/result/heart",
    //       state: { val: res["data"]["result"] },
    //     })
    //   )
    //   .catch((err) => console.log(err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("/result/covid", data)
      .then((res) => {
        this.props.history.push({
          pathname: "/result/covid",
          state: { val: res["data"]["result"] },
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container-contact100">
          <div className="wrap-contact100">
            <form
              className="contact100-form validate-form"
              onSubmit={this.onSubmit}
            ></form>
            <span className="contact100-form-title"> COVID Detection </span>
            <div>
              <label for="img">Select image:</label>
              <input
                onChange={this.onChangeHandler}
                type="file"
                id="img"
                name="img"
                accept="image/*"
              />
            </div>

            <div className="container-contact100-form-btn">
              <button
                className="contact100-form-btn"
                onClick={this.onClickHandler}
              >
                <span>
                  Submit
                  <i
                    className="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

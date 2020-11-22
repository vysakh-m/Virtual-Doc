import React, { Component } from "react";
import "../../styles/data_style_a.css";
import "../../styles/data_style_b.css";
import axios from "axios";
export default class Diabetes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blood_glucose_random: "",
      sugar: "",
      red_blood_cell_count: "",
      blood_urea: "",
      serum_creatinine: "",
      diabetes_mellitus: "",
      pus_cell: "",
      anemia: "",
      albumin: "",
      blood_pressure: "",
      red_blood_cells: "",
      age: "",
      coronary_artery_disease: "",
      specific_gravity: "",
      sodium: "",
      appetite: "",
      white_blood_cell_count: "",
      packed_cell_volume: "",
      pedal_edema: "",
      potassium: "",
      pus_cell_clumps: "",
      hemoglobin: "",
      hypertension: "",
      bacteria: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      blood_glucose_random: this.state.blood_glucose_random,
      sugar: this.state.sugar,
      red_blood_cell_count: this.state.red_blood_cell_count,
      blood_urea: this.state.blood_urea,
      serum_creatinine: this.state.serum_creatinine,
      diabetes_mellitus: this.state.diabetes_mellitus,
      pus_cell: this.state.pus_cell,
      anemia: this.state.anemia,
      albumin: this.state.albumin,
      blood_pressure: this.state.blood_pressure,
      red_blood_cells: this.state.red_blood_cells,
      age: this.state.age,
      coronary_artery_disease: this.state.coronary_artery_disease,
      specific_gravity: this.state.specific_gravity,
      sodium: this.state.sodium,
      appetite: this.state.appetite,
      white_blood_cell_count: this.state.white_blood_cell_count,
      packed_cell_volume: this.state.packed_cell_volume,
      pedal_edema: this.state.pedal_edema,
      potassium: this.state.potassium,
      pus_cell_clumps: this.state.pus_cell_clumps,
      hemoglobin: this.state.hemoglobin,
      hypertension: this.state.hypertension,
      bacteria: this.state.bacteria,
    };

    axios
      .post("/result/kidney", data)
      .then((res) =>
        this.props.history.push({
          pathname: "/result/kidney",
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
              <span className="contact100-form-title"> Kidney Diagnosis </span>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Blood Glucose </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.blood_glucose_random}
                  name="blood_glucose_random"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Sugar </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.sugar}
                  name="sugar"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">RBC Count</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.red_blood_cell_count}
                  name="red_blood_cell_count"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Blood Urea</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.blood_urea}
                  name="blood_urea"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Serum Creatinine</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.serum_creatinine}
                  name="serum_creatinine"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Diabetes Mellitus </span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.diabetes_mellitus}
                  name="diabetes_mellitus"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">PUS Cell</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.pus_cell}
                  name="pus_cell"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Anemia</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.anemia}
                  name="anemia"
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
                <span className="label-input100">BP</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.blood_pressure}
                  name="blood_pressure"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">RBC</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.red_blood_cells}
                  name="red_blood_cells"
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
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Coronary Artery Disease</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.coronary_artery_disease}
                  name="coronary_artery_disease"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Specific Gravity</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.specific_gravity}
                  name="specific_gravity"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Sodium</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.sodium}
                  name="sodium"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Appetite</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.appetite}
                  name="appetite"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">WBC Count</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.white_blood_cell_count}
                  name="white_blood_cell_count"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Packed Cell Volume</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.packed_cell_volume}
                  name="packed_cell_volume"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">pedal Edema</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.pedal_edema}
                  name="pedal_edema"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Potassium</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.potassium}
                  name="potassium"
                />
              </div>
              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Pus Cell Clumps</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.pus_cell_clumps}
                  name="pus_cell_clumps"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Hemoglobin</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.hemoglobin}
                  name="hemoglobin"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Hypertension</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.hypertension}
                  name="hypertension"
                />
              </div>

              <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100">Bacteria</span>
                <input
                  className="input100"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.bacteria}
                  name="bacteria"
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

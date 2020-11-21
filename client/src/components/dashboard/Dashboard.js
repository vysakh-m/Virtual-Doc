import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import "../../styles/dashboard_style.css";
import Oneitem from "./Oneitem.js";

export default class Dashboard extends Component {
  render() {
    return (
      <div class="content custom_dashboard">
        <div class="container ">
          <div class="row custom_row">
            <Oneitem
              name="Kidney Diagnosis"
              desc="Using different features like age, Blood Pressure, Specific Gravity, Sugar, Blood Glucose, Anemia etc to predict
               whether a person has a Chronic Kidney Disease or not."
            />
            <Oneitem name="Liver Diagnosis" />
            <Oneitem
              name="Diabetes Diagnosis"
              desc="Identify whether the patient has diabetes or not based on
             parameters like, Diastolic blood pressure, Triceps skin fold thickness, Body mass index, Diabetes pedigree function age etc."
            />
          </div>
          <div class="row custom_row">
            <Oneitem
              name="Malaria Detection"
              desc="Identify whether the patient is having Malaria or not based on affected cell images."
            />
            <Oneitem name="Breast Cancer Detection" />
            <Oneitem
              name="Pneumonia Detection"
              desc="Identify whether the patient is having Viral-Pneumonia or Bacterial-Pneumonia or whether they are normal based on X-Ray data."
            />
          </div>
          <div class="row custom_row">
            <Oneitem name="Heart Diagnosis" />
            <Oneitem name="COVID Detection" />
          </div>
        </div>
      </div>
    );
  }
}

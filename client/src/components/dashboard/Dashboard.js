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
              link={"/kidney"}
            />
            <Oneitem
              name="Liver Disease Detection"
              desc="Identify whether a patient has liver disease that can be occur due to excessive consumption of alcohol, inhale of harmful gases, 
              intake of contaminated food, pickles and drugs etc"
              link={"/liver"}
            />
            <Oneitem
              name="Diabetes Diagnosis"
              desc="Identify whether the patient has diabetes or not based on
             parameters like, Diastolic blood pressure, Triceps skin fold thickness, Body mass index, Diabetes pedigree function age etc."
              link="/diabetes"
            />
          </div>
          <div class="row custom_row">
            <Oneitem
              name="Malaria Detection"
              desc="Identify whether the patient is having Malaria or not based on affected cell images."
              link="/malaria"
            />
            <Oneitem
              name="Heart Disease Detection"
              desc="Find out you have any chance of having heart disease or not. To do that just provide your different test results
             like blood sugar, serum cholesterol, maximum heart rate achieved etc. and in one click know your state."
              link="/heart"
            />
            <Oneitem
              name="COVID Detection"
              desc="Identify whether the patient has diabetes or not based on the chest xray data. The model has been trained on 400+ images to gain a better accuracy."
              link="/covid"
            />
          </div>
        </div>
      </div>
    );
  }
}

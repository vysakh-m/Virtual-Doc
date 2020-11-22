import React, { Component } from "react";
import "../../styles/landing_style.css";
import landing_image from "../../styles/img/landing.jpg";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <section id="hero">
          <div className="hero-container">
            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              ></ol>

              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="carousel-background">
                    <img
                      src={landing_image}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        Welcome to <span>Virtual Doc</span>
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Services for a better tomorrow
                      </p>
                      <Link
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                        href=""
                        to="/login"
                      >
                        Sign in
                      </Link>

                      <Link
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                        href=""
                        to="/register"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="services" className="services">
            <div className="container">
              <div className="section-title">
                <h2>Our Services</h2>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    {/* <div className="icon">
                      <i className="bx bxl-dribbble"></i>
                    </div> */}
                    <h4 className="title">
                      <a href="">Chronic Kidney Disease</a>
                    </h4>
                    <p className="description">
                      We are using different features like, age,bp,specific
                      gravity,sugar,blood glucose,anemia etc. to predict that a
                      person has a ckd or not.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <h4 className="title">
                      <a href="">Pneumonia Detection</a>
                    </h4>
                    <p className="description">
                      Identify whether the patient is having Viral-Pneumonia or
                      Bacterial-Pneumonia or whether they are normal based on
                      X-Ray data.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <h4 className="title">
                      <a href="">Malaria Detection</a>
                    </h4>
                    <p className="description">
                      Identify whether the patient is having Malaria or not
                      based on affected cell images.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                    <h4 className="title">
                      <a href="">Diabetes Diagnosis</a>
                    </h4>
                    <p className="description">
                      Identify whether the patient has diabetes or not based on
                      parameters like, Diastolic blood pressure, Triceps skin
                      fold thickness, Body mass index, Diabetes pedigree
                      function age etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Aboutus extends Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: "150px" }}>
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>The TEAM</h2>
        <div className="container">
          <h4 style={{ marginTop: "20px" }}> Vysakh Murali</h4>
          <p>
            Research Intern at AugsenseLab | Computer Vision Nanodegree Graduate
            | Deep Learning Enthusiast | MERN Stack Developer
          </p>
          <p>
            College: Rajagiri School of Engineering and Technology, CSE
            Undergrad{" "}
          </p>
          <h4 style={{ marginTop: "20px" }}>Vishak J Nair</h4>
          <p>Front-end Enthusiast</p>
          <p>Chairperson,CyberBlitz,RSET | CSE Undergrad</p>
          <p>
            College: Rajagiri School of Engineering and Technology, CSE
            Undergrad{" "}
          </p>
          <h4 style={{ marginTop: "20px" }}>Soumyadip Sarkar</h4>
          <p>Deep Learning, Computer Vision,NLP EE Undergrad</p>
          <p>College: Institute of Engineering and Management,Kolkata </p>
        </div>
      </div>
    );
  }
}

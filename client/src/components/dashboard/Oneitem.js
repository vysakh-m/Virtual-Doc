import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Oneitem extends Component {
  render() {
    return (
      <div>
        <div class="col-lg-4 custom_chng">
          <div class="text-center card-box card-5-5 card-5">
            <div class="member-card pt-2 pb-2">
              <div class="">
                <h4>{this.props.name}</h4>
                <p class="text-muted">{this.props.desc}</p>
              </div>
              <hr />
              <Link
                to={this.props.link}
                class="btn btn-dark mt-3 btn-rounded waves-effect w-md waves-light"
              >
                CHECK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

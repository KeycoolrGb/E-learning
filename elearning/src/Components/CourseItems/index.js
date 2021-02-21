import React, { Component } from "react";

export default class CourseItems extends Component {
  render() {
    return (
      <div className="card p-2">
        <img />
        <div style={{ fontWeight: "bold" }} className="lead">
          Điệp vụ 007
        </div>
        <div className="lead">director: Tuấn</div>
        <div className="lead">rating: 5 star</div>
        <button className="btn btn-success">Get</button>
      </div>
    );
  }
}

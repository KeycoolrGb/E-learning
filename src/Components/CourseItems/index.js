import React, { Component } from "react";

export default class CourseItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card p-2">
        <img src={this.props.data.Image} alt="phim" />
        <div style={{ fontWeight: "bold" }} className="lead">
          {this.props.data.Title}
        </div>
        <div className="lead">{this.props.data.Director}</div>
        <div className="lead">{this.props.data.Rating}</div>
        <button className="btn btn-success">Get Detail</button>
      </div>
    );
  }
}

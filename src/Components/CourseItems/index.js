import React, { Component } from "react";

export default class CourseItems extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }
  render() {
    return (
      <div className="card p-2">
        <img />
        <div style={{ fontWeight: "bold" }} className="lead">
          {this.props.data.Title && this.props.data.Title}
        </div>
        <div className="lead">
          {this.props.data.Director && this.props.data.Director}
        </div>
        <div className="lead">
          {this.props.data.Rating && this.props.data.Rating}
        </div>
        <button className="btn btn-success">Get</button>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CourseItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card p-2">
        <img
          style={{ width: "100%", height: 250 }}
          src={this.props.data.hinhAnh}
        />
        <div style={{ fontWeight: "bold" }} className="lead">
          {this.props.data.tenKhoaHoc}
        </div>
        <div className="lead">{this.props.data.moTa}</div>

        <Link
          to={`/detail/${this.props.data.maKhoaHoc}`}
          className="btn btn-success"
        >
          Get Detail
        </Link>
      </div>
    );
  }
}

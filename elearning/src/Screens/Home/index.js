import React, { Component } from "react";
import CourseItems from "../../Components/CourseItems";
import axios from "axios";
export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách phim</h1>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <CourseItems />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }
}

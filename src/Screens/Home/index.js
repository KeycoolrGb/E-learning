import React, { Component } from "react";
import CourseItems from "../../Components/CourseItems";
import axios from "axios";
import { connect, useSelector, useDispatch } from "react-redux";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      movieList: [],
    };
  }

  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách phim</h1>
        <div className="container">
          <div className="row">
            {this.state.movieList.map((item, index) => (
              <div key={index} className="col-2">
                <CourseItems data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios({
      url: "http://svcy.myclass.vn/api/Movie/GetMovie",
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        //this.setState({ movieList: res.data });
        this.props.dispatch({
          type: "FETCH_MOVIE",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}
const mapStateToProp = (state) => ({
  movieList: state.movie.movies,
});
export default connect(mapStateToProp)(HomeScreen);
// export default HomeScreen;

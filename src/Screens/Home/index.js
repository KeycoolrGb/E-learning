import React, { Component } from "react";
import CourseItems from "../../Components/CourseItems";

import { connect, useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../../Redux/Action/movie";

class HomeScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movieList: [],
  //   };
  // }
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh sách khoá học</h1>
        <div className="container">
          <div className="row">
            {this.props.movieList.map((item, index) => {
              return (
                <div key={index} className="col-2">
                  <CourseItems data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMovie());
  }
}
const mapStateToProps = (state) => ({
  movieList: state.movie.movies,
});
export default connect(mapStateToProps)(HomeScreen);
// export default HomeScreen;

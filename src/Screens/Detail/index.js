import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class CouresDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movieDetail.Image} />
        <div>{this.props.movieDetail.Description}</div>
        <div>{this.props.movieDetail.ShowTimes[0].DateReady}</div>
      </div>
    );
  }
  componentDidMount() {
    axios({
      url: "http://svcy.myclass.vn/api/Movie/GetMovieDetail/1",
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        this.props.dispatch({
          type: "FETCH_DETAIL",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.movie.movieDetail || {
    ID: "",
    Image: "",
    Description: "",
    ShowTimes: [{}],
  },
});
export default connect(mapStateToProps)(CouresDetailScreen);

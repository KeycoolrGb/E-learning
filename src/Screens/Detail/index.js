import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailMovies } from "../../Redux/Action/movie";

class MovieDetailScreen extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.movieDetail.hinhAnh}
          style={{ width: 300, height: 230 }}
        />
        <div>{this.props.movieDetail.tenKhoaHoc}</div>
        <div>{this.props.movieDetail.moTa}</div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetailMovies(this.props.match.params.movieId));
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.movie.movieDetail || {
    ID: "",
    Image: "",
    Description: "",
    Title: "",
    ShowTimes: [{}],
  },
});
export default connect(mapStateToProps)(MovieDetailScreen);

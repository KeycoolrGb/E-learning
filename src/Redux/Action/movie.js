import { newMovieService } from "../../Services";
import { actionCreater } from ".";
import { FETCH_MOVIE } from "./type";
import { FETCH_DETAIL } from "../../Redux/Action/type";
//async action
export const fetchMovie = () => {
  return (dispatch) => {
    newMovieService
      .fetchMovie()
      //promise
      .then((res) => {
        console.log(res);
        // this.setState({ movieList: res.data });
        dispatch(actionCreater(FETCH_MOVIE, res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const fetchDetailMovies = (id) => {
  return (dispatch) => {
    newMovieService
      .fetchDetailMovie(id)
      .then((res) => {
        console.log(res);
        // this.props.dispatch({
        //   type: "FETCH_DETAIL",
        //   payload: res.data,
        // });
        dispatch(actionCreater(FETCH_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const initialState = {
  movies: [],
  movieDetail: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      state.movies = action.payload;
      return { ...state };
    case "FETCH_DETAIL":
      state.movieDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;

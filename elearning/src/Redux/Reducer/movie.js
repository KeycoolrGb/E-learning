const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      state.movies = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default movieReducer;

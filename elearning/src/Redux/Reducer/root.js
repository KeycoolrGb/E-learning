import { combineReducers } from "redux";
import movieReducer from "./movie";

const RootReducer = combineReducers({
  movie: movieReducer,
});

export default RootReducer;

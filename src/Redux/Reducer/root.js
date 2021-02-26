import { combineReducers } from "redux";
import movieReducer from "./movie";
import userReducer from "./user";

const RootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
});

export default RootReducer;

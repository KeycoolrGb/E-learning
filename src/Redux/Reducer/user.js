import { FETCH_CREDENTIALS } from "../Action/type";

const initialState = {
  // thông tin đăng nhập
  credentials: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default userReducer;

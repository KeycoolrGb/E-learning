import { actionCreater } from ".";
import { newUserService } from "../../Services";
import { FETCH_CREDENTIALS } from "./type";

export const login = (user) => {
  return (dispatch) => {
    newUserService
      .signIn(user)
      .then((res) => {
        dispatch(actionCreater(FETCH_CREDENTIALS, res.data));
        localStorage.setItem("credentials", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

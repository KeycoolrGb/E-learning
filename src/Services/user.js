import axios from "axios";
import * as yup from "yup";
export const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required"),
  matKhau: yup.string().required("* Field is required"),
  hoTen: yup.string().required("* Field is required"),
  email: yup
    .string()
    .required("* Field is required")
    .email("* Email is invalid"),
  soDt: yup
    .string()
    .required("* Field is required")
    .matches(/^[0-9]+$/),
  maNhom: yup.string().required("* Field is required"),
});
class UserService {
  signUp(data) {
    return axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",

      method: "POST",
      data,
    });
  }
  signIn(user) {
    return axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,

      method: "POST",
      data: user,
    });
  }
}

export default UserService;

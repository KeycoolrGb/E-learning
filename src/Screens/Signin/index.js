import React, { Component } from "react";
import { Form, Field, Formik } from "formik";
export class SigninScreen extends Component {
  render() {
    return (
      <Formik
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{ taiKhoan: "", matKhau: "" }}
        render={({ handleChange }) => (
          <Form className="w-50 m-auto ">
            <h1 className="display-4">Đăng Nhập</h1>
            <div className="form-group">
              <label>Tài khoản</label>
              <Field
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <Field
                type="password"
                className="form-control"
                name="matKhau"
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="btn btn-success mt-2">Đăng Nhập</button>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default SigninScreen;

import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const signUpUserSchema = yup.object().shape({
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
class SignupScreen extends Component {
  _handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="display-4 text-center">Sign Up</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
          }}
          validationSchema={signUpUserSchema}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage
                  name="taiKhoan"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage
                  name="matKhau"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="form-group">
                <label>Họ Tên: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage
                  name="hoTen"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDt"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage
                  name="soDt"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="form-group">
                <label>Mã Nhóm: </label>
                <Field
                  className="form-control"
                  name="maNhom"
                  component="select"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage
                  name="maNhom"
                  render={(msg) => (
                    <div className="alert alert-danger">{msg}</div>
                  )}
                />
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-success">Submit</button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
export default SignupScreen;

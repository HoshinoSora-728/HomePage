import React from "react";
import { Form, withFormik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { withRouter } from "react-router";

const Error = styled.span`
  color: red;
`;

const InnerForm = ({ props, errors, touched }) => (
  <Form>
    名前
    <Field name="name" />
    <Error>
      {touched.name && errors.name && (
        <div className="errorText">{errors.name}</div>
      )}
    </Error>
    メールアドレス
    <Field name="email" />
    <Error>
      {touched.email && errors.email && (
        <div className="errorText">{errors.email}</div>
      )}
    </Error>
    パスワード
    <Field name="password" type="password" />
    <Error>
      {touched.password && errors.password && (
        <div className="errorText">{errors.password}</div>
      )}
    </Error>
    パスワードの確認
    <Field name="confirmpassword" type="password" />
    <Error>
      {touched.confirmPassword && errors.confirmPassword && (
        <div className="errorText">{errors.confirmPassword}</div>
      )}
    </Error>
    <button type="submit"></button>
    <button href="/inquiry/complete" type="submit" />
  </Form>
);

const InputForm = withFormik({
  mapPropsToValues: (props, values) => ({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    context: "",
    props: values,
  }),
  handleSubmit: (props, values) => {
    //console.log(values.props.history);
    values.props.history.push("/inquiry/complete");
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(30, "名前は30文字以内で入力してください")
      .matches(/^[^\x20-\x7e]*$/, "全角文字のみ") //全角文字のみ（空文字OK）
      .required("名前は必須項目です"),
    email: Yup.string()
      .email()
      .max(30, "メールアドレスは30文字以内で入力してください")
      .required("本ールアドレスは必須項目です"),
    password: Yup.string()
      .max(30, "パスワードは30文字以内で入力してください")
      .min(8, "パスワードは８文字以上で入力してください")
      .required("パスワードは必須項目です"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "passwordが一致しません。")
      .required("パスワードは必須項目です"),
  }),
})(InnerForm);

export default withRouter(InputForm);

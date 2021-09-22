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
    <Field name="name" />
    <Error>
      {touched.name && errors.name && (
        <div className="errorText">{errors.name}</div>
      )}
    </Error>
    <Field name="email" />
    <Error>
      {touched.email && errors.email && (
        <div className="errorText">{errors.email}</div>
      )}
    </Error>
    <Field name="context" />
    <button type="submit"></button>
    <button href="/inquiry/complete" type="submit" />
  </Form>
);

const InquiryForm = withFormik({
  mapPropsToValues: (props, values) => ({
    name: "",
    email: "",
    context: "",
    props: values,
  }),
  handleSubmit: (props, values) => {
    //console.log(values.props.history);
    values.props.history.push("/inquiry/complete");
  },
  //   handleReset: (props) => ({
  //     name: "",
  //     email: "",
  //     context: "",
  //   }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .max(30, "名前は30文字以内で入力してください")
      .matches(/^[^\x20-\x7e]*$/, "全角文字のみ") //全角文字のみ（空文字OK）
      .required("名前は必須項目です"),
    email: Yup.string()
      .max(30, "メールアドレスは30文字以内で入力してください")
      .required("本ールアドレスは必須項目です"),
  }),
})(InnerForm);

export default withRouter(InquiryForm);

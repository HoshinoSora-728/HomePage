import React, { useState, useEffect } from "react";
import { Form, useFormik } from "formik";
import Login from "./Login";
import { useHistory } from "react-router";
import history from "./history";

const Inquiry = (props) => {
  const history = useHistory();

  const move = (e) => {
    console.log(history.location);
    props.history.push("/inquiry/complete"); // 画面遷移
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    var count2 = count + 1;
    console.log(history.location);
    console.log(count2);
    //document.title = `${count}回クリックされました`;
  });

  const handleToAboutPage = () => {
    console.log(props);
    props.history.push("/");
  };

  const handleToAboutPage2 = () => {
    props.history.push("/information");
  };

  //   const goToPages = () => {
  //     history.push("/pages");
  //   };

  return (
    <div>
      <h2>お問い合わせフォーム</h2>
      {/* <Form> */}
      <Login props></Login>
      {/* <form action=""> */}
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>ホームへ</button>
      <button onClick={handleToAboutPage}>ホームへ</button>
      <button onClick={handleToAboutPage2}>情報</button>
      {/* </form> */}

      {/* </Form> */}
    </div>
  );
};

export default Inquiry;

// /**
//  * フォームの型
//  */
// type FormValueType = {
//   email: string;
//   firstName: string;
//   lastName: string;
// };

// /**
//  * フォームのエラーの型定義
//  */
// type FormErrorType = {
//   [P in keyof FormValueType]?: string;
// };

// /**
//  * バリデーション用の関数
//  * @param values
//  */
// const validate = (values: FormValueType): FormErrorType => {
//   const errors: FormErrorType = {};

//   if (!values.firstName) {
//     errors.firstName = "このフィールドは必須です";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "１５文字以下で入力してください";
//   }

//   if (!values.lastName) {
//     errors.lastName = "このフィールドは必須です";
//   } else if (values.lastName.length > 15) {
//     errors.lastName = "１５文字以下で入力してください";
//   }

//   if (!values.email) {
//     errors.email = "このフィールドは必須です";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "正しいメールアドレスを入力してください";
//   }

//   return errors;
// };

// /**
//  * 送信処理
//  * @param values
//  */
// const onSubmit = (values: FormValueType) => {
//   alert(JSON.stringify(values, null, 2));
// };

// /**
//  * 登録フォーム
//  */
// const SignupForm = () => {
//   /**
//    * フォームの定義
//    */
//   const formik = useFormik<FormValueType>({
//     initialValues: { email: "", firstName: "", lastName: "" },
//     validate: validate,
//     onSubmit: onSubmit,
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="email">メールアドレス</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         ></input>
//         {formik.errors.email ? <div>{formik.errors.email}</div> : null}
//         <label htmlFor="lastName">姓</label>
//         <input
//           id="lastName"
//           name="lastName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.lastName}
//         ></input>
//         {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
//         <label htmlFor="firstName">名</label>
//         <input
//           id="firstName"
//           name="firstName"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.firstName}
//         ></input>
//         {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
//         <button
//           type="submit"
//           onSubmit={() => {
//             formik.handleSubmit();
//           }}
//         >
//           送信
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;

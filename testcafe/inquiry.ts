import { Selector } from "testcafe";

fixture("問い合わせフォーム").page("http://localhost:3000/inquiry");

const userName = Selector("#name");
const mailAddress = Selector("#email");
const context = Selector("#context");
const password = Selector("#password");
const confirmPassword = Selector("#confirmpassword");

const submitButton = Selector("#submit");

test("問い合わせ完了画面に遷移", async (t) => {
  await t
    .setNativeDialogHandler(() => true)
    .typeText(userName, "マーレ太郎")
    .typeText(mailAddress, "abcdefg@gmail.com")
    .typeText(context, "12345678")
    // .typeText(confirmPassword, "12345678")
    .click(submitButton);
  await t
    .expect(Selector("#message").innerText)
    .eql(
      "お問合せありがとうございます。受付完了いたしました、回答までお時間いただきますのでしばらくお待ちください。"
    );
});

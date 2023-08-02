import * as Yup from "yup";

export const LoginSchemas = Yup.object({
email: Yup.string()
    .email()
    .matches(
      /^[!#$%&'*+-/=?^_`A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/,
      "Email is not valid"
    )
    .required("Please Enter Email"),
 password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(15, "Password cannot exceed 15 characters")
    .required("Please enter a password"),


})
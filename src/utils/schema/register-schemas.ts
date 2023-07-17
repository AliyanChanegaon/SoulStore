import * as Yup from "yup";

export const RegisterSchemas = Yup.object({
  firstName: Yup.string()
    .min(4, "First name must be atleast 4 characters")
    .max(10, "should not exceed more then 10 characters")
    .required("Please Enter Name"),
  email: Yup.string()
    .email()
    .matches(
      /^[!#$%&'*+-/=?^_`A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/,
      "Email is not valid"
    )
    .required("Please Enter Email"),
  phoneNumber: Yup.string()
    .min(8, "Phone number must be at least 8 characters")
    .max(15, "Phone number cannot exceed 15 characters")
    .required("Please enter a phone number"),
  lastName: Yup.string()
    .min(5, "Last name must be at least 5 characters")
    .max(15, "Should not exceed more than 15 characters")
    .required("Please enter a last name"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .max(15, "Password cannot exceed 15 characters")
    .required("Please enter a password"),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], "Passwords must match")
    .required("Please confirm your password"),
});

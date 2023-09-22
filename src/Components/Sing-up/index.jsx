import * as Yup from 'yup';

export const Schema = Yup.object({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('This field is required'),
    email: Yup.string()
        .email('Please Provide An valid Email')
        .required('This field is required'),
    mobile: Yup.number()
        .required('Mobile number is required'),
    // .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    password: Yup.string()
        .required('Please Enter Your Password'),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
})
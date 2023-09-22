import { useFormik } from 'formik';
import { Schema } from './index';
import './sing-up.css'


const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
};

//create a sign-up component for show the sing up form in front of user 
const Signup = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: Schema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });



    const design = (
        <>
            <div className='container'>
                <div className='window'>
                    <div className='overlay'></div>
                    <div className='content'>
                        <div className='welcome'>Hello There!</div>
                        <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                        <form onSubmit={handleSubmit}>
                            <div className='input-fields'>
                                <input type='text'
                                    placeholder='Username'
                                    className='input-line full-width'
                                    onChange={handleChange}
                                    name='name' required
                                    value={values.name}
                                    onBlur={handleBlur}
                                />
                                {touched.name && errors.name ? <span className='err'>{errors.name}</span> : ""}
                                <input type='email'
                                    placeholder='Email'
                                    className='input-line full-width'
                                    onChange={handleChange}
                                    name="email" required
                                    value={values.email}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email ? <span className='err'>{errors.email}</span> : ""}                                       <input type='tel'
                                    placeholder='Mobile'
                                    className='input-line full-width'
                                    onChange={handleChange}
                                    name='mobile' required
                                    value={values.mobile}
                                    onBlur={handleBlur}
                                />
                                {touched.mobile && errors.mobile ? <span className='err'>{errors.mobile}</span> : ""}
                                <input type='password'
                                    placeholder='password'
                                    className='input-line full-width'
                                    name='password' required
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password ? <span className='err'>{errors.password}</span> : ""}
                                <input type='password'
                                    placeholder='Repeat Password'
                                    className='input-line full-width'
                                    name='cpassword' required
                                    onChange={handleChange}
                                    value={values.cpassword}
                                    onBlur={handleBlur}
                                />
                                {touched.cpassword && errors.cpassword ? <span className='err'>{errors.cpassword}</span> : ""}
                            </div>
                            <span><input type="checkbox" required />i Agree Your turm & condition</span>
                            <div>
                                <button className='ghost-round full-width' type='submit'>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
};


export default Signup;
import React, { useState } from 'react';
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Registration.css';
import axios from 'axios';
import work from '../../assets/police.png'; // Logo image
import baseUrl from '../../config';

const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                signupHandle();
                action.resetForm();
            },
        });

    const signupHandle = () => {
        axios.post(`${baseUrl}/user/register`, {
            username: values.username,
            email: values.email,
            password: values.password
        }).then((data) => {
            if (data.data.status === 200) {
                toast.success(data.data.message);
            } else {
                toast.error(data.data.message);
            }
        })
        .catch((error) => toast.error(error.message));
    };

    return (
        <>
            <div className="registration-container">
                {/* Header */}
                <header className="header">
                    <div className="header-content">
                        <img src={work} alt="Valsad Police" className="header-logo" />
                        <h1>Valsad District Police Portal</h1>
                    </div>
                </header>

                {/* Main content with form and image */}
                <div className="form-image-container">
                    {/* Left section - Form */}
                    <div className="form-container">
                        <ToastContainer
                            position="bottom-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />
                        <div className="form-box">
                            <div className="form-left">
                               
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label htmlFor="username" className="input-label">Username</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            name="username"
                                            id="username"
                                            placeholder="Username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {errors.username && touched.username ? (
                                        <p className="form-error">{errors.username}</p>
                                    ) : null}

                                    <div className="input-block">
                                        <label htmlFor="email" className="input-label">Email</label>
                                        <input
                                            type="email"
                                            autoComplete="off"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {errors.email && touched.email ? (
                                        <p className="form-error">{errors.email}</p>
                                    ) : null}

                                    <div className="input-block">
                                        <label htmlFor="password" className="input-label">
                                            Password 👁️
                                        </label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="off"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            onClick={() => setShowPassword(!showPassword)}
                                        />
                                    </div>
                                    {errors.password && touched.password ? (
                                        <p className="form-error">{errors.password}</p>
                                    ) : null}

                                    <div className="input-block">
                                        <label htmlFor="confirm_password" className="input-label">Confirm Password</label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </div>
                                    {errors.confirm_password && touched.confirm_password ? (
                                        <p className="form-error">{errors.confirm_password}</p>
                                    ) : null}

                                    <div className="modal-buttons">
                                        <button className="input-button" type="submit">
                                            Registration
                                        </button>
                                    </div>
                                </form>
                                <p className="sign-up">
                                    Already have an account? <Link to="/login">Sign In now</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Image */}
                    <div className="image-right">
                        <img src={work} alt="Police Work" className="right-image" />
                        <h1 className="form-title">Welcome!</h1>
                                <p className="form-desc">
                                    Please fill out the form below to create an account.
                                    Ensure your password is strong and unique to keep your information safe.
                                </p>

                    </div>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Valsad District Police. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default Registration;

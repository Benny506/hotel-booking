import React, { useEffect, useState, useRef } from "react";
import * as yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'
import loginImg1 from '../../assets/loginpage/loginImg1.jpg'
import loginImg2 from '../../assets/loginpage/loginImg2.jpg'
import loginImg3 from '../../assets/loginpage/loginImg3.jpg'
import loginImg4 from '../../assets/loginpage/loginImg4.jpg'
import logo from '../../assets/globalassets/logoWithText.png'

import './css/auth.css'
import { Carousel } from "react-bootstrap";

const images = [
        {img: loginImg1, alt: 'first slide'}, 
        {img: loginImg2, alt: 'second slide'}, 
        {img: loginImg3, alt: 'third slide'},
        {img: loginImg4, alt: 'fourth slide'
    }
]

export default function Login(){

    const schema = yup.object({
        email: yup.string().email('Must be a valid email address!').required('Email address is required'),
        password: yup.string().required('Password required')
    })

    const carouselItems = images.map((image, i) => {
        const { img, alt } = image
        return (
            <Carousel.Item key={i}>
                <img
                    className="login-image"
                    src={img}
                    alt="First slide"
                />
            </Carousel.Item>
        )
    })

    return (
        <div>            
            <Formik
                initialValues={{
                    email: '', password: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                }}
                validationSchema={schema}
            >
                {({ handleBlur, handleChange, handleSubmit, isValid, dirty, values}) => (
                    <Form>
                        <div className="login-container">
                            <div className="d-flex">
                                <div className="col-lg-6">
                                    <Carousel 
                                        fade 
                                        interval={2200}
                                        controls={false}
                                    >
                                        { carouselItems }                                                                                                                                                                
                                    </Carousel>                                   
                                </div>

                                <div className="col-lg-6 p-5 bg-white">
                                    <div className="my-5"></div>
                                    <div className="mb-5">
                                        <div className="mb-5">
                                            <div className="mb-5">
                                                <img src={logo} />
                                            </div>
                                            <div>
                                                <h1 className="login-form-header mb-4">Login</h1>
                                                <p className="login-form-caption">
                                                    Login with the data you entered during your registration.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="mb-4">
                                                <label htmlFor="email" className="login-form-label mb-2">Email</label>
                                                <br/>
                                                <input 
                                                    value={values.email}
                                                    name="email"
                                                    placeholder="yourname@example.com"
                                                    onInput={handleChange}
                                                    onBlur={handleBlur}
                                                    className="login-form-input-field p-2 w-100"
                                                    type="text"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="login-form-label mb-2">Password</label>
                                                <br/>
                                                <input 
                                                    value={values.password}
                                                    name="password"
                                                    placeholder="**********"
                                                    onInput={handleChange}
                                                    onBlur={handleBlur}
                                                    className="login-form-input-field p-2 w-100"
                                                    type="password"
                                                />
                                            </div>                                                                            
                                        </div>

                                        <div className="mb-3">
                                            <button className="login-form-btn w-100 p-3">Log In</button>
                                        </div>

                                        <div className="d-flex justify-content-end align-items-center">
                                            <p className="login-form-forgot-password">Did you forget your password?</p>
                                        </div>
                                    </div>

                                    <div className="login-signup-container p-5 mb-5">
                                        <div className="mb-4">
                                            <h2 className="login-signup-header mb-4">Are you new here?</h2>
                                            <p className="login-form-caption">
                                                Create a new account to utilize our services                                         
                                            </p>
                                        </div> 
                                        <div>
                                            <button className="login-signup-btn w-100 p-3">Create account</button>
                                        </div>                                       
                                    </div>

                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <p className="login-signup-btn-footer-text">Cookies</p>
                                            <p className="mx-lg-4 login-signup-btn-footer-text">Legal policy</p>
                                        </div>
                                        <div>
                                            <p className="fst-italic login-signup-btn-footer-text">Made by Control Genesis</p>
                                        </div>
                                        <div>
                                            <p className="login-signup-btn-footer-text">Copyright 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
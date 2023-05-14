import React, { useEffect, useState, useRef } from "react";
import * as yup from 'yup'
import { Formik, ErrorMessage, Form } from 'formik'
import loginImg1 from '../../assets/loginpage/loginImg1.jpg'
import loginImg2 from '../../assets/loginpage/loginImg2.jpg'
import loginImg3 from '../../assets/loginpage/loginImg3.jpg'
import loginImg4 from '../../assets/loginpage/loginImg4.jpg'
import logo from '../../assets/globalassets/logoWithText.png'
import { requestApi } from '../apiRequests/requestApi'
import './css/auth.css'
import { Carousel, FormControl, InputGroup, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomErrorMsg from "../errorMessage/CustomErrorMsg";
import ScrollToTop from "../scroll/ScrollToTop";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const images = [
        {img: loginImg1, alt: 'first slide'}, 
        {img: loginImg2, alt: 'second slide'}, 
        {img: loginImg3, alt: 'third slide'},
        {img: loginImg4, alt: 'fourth slide'
    }
]

export default function SignUp(){
    const initiateNavigation = useNavigate()
    const navigateTo = (path, data) => initiateNavigation(path, data)
    const goToLogin = () => navigateTo('login')

    const [signUpRequirements, setSignUpRequirements] = useState()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
        if(signUpRequirements){
            async function createUser(){
                const newUser = await requestApi({ url: 'user/signUp', method: 'post', data: signUpRequirements })
                const { responseStatus, result, errorMsg } = newUser
                console.log(newUser)
                if(responseStatus){
                    console.log(result)
                    setSignUpRequirements()
                } else{
                    setErrorMsg(errorMsg.error)
                    setSignUpRequirements()
                    return;
                }
            }
            createUser()
        } else{
            return 
        }
    }, [signUpRequirements])

    const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)

    const schema = yup.object({
        email: yup.string().email('Must be a valid email address!').required('Email address is required'),
        password: yup.string().required('Password required'),
        username: yup.string().required('Username required')
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
        <div className="signup-page"> 
            <ScrollToTop condition={errorMsg} />           
            <Formik
                initialValues={{
                    email: '', password: '', username: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    const entirePage = document.querySelector('.signup-page')
                    if(entirePage){
                        setErrorMsg()
                        setSignUpRequirements(values)
                        return entirePage.classList.add('disable-all-click-events')
                    }

                    return;
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
                                                <h1 className="login-form-header mb-4">Register</h1>
                                                <p className="login-form-caption">
                                                    Register/Sign up
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            {
                                                errorMsg && <CustomErrorMsg errorMsg={errorMsg} />
                                            }
                                            <div className="mb-4">
                                                <label htmlFor="username" className="login-form-label mb-2">Username</label>
                                                <br/>
                                                <input 
                                                    value={values.username}
                                                    name="username"
                                                    placeholder="username"
                                                    onInput={handleChange}
                                                    onBlur={handleBlur}
                                                    className="login-form-input-field p-2 w-100"
                                                    type="text"
                                                />
                                                    <p className="login-error-msg my-2 mx-1">
                                                        <ErrorMessage name="username" />
                                                    </p>
                                            </div>                                            
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
                                                <p className="login-error-msg my-2 mx-1">
                                                    <ErrorMessage name="email" />
                                                </p>                                                
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="login-form-label mb-2">Password</label>
                                                <br/>
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                        id="login-form-input-field-password"
                                                        name="password"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="password"
                                                        className="login-form-input-field"
                                                        value={values.password}
                                                        onInput={handleChange}
                                                        onBlur={handleBlur}
                                                        type={passwordVisible ? 'text' : 'password'}
                                                    />
                                                    <InputGroup.Text id="password" className="login-form-forgot-password" onClick={togglePasswordVisibility}>
                                                        {
                                                            passwordVisible
                                                            ?
                                                                <AiFillEye size={20} />
                                                            :
                                                                <AiFillEyeInvisible size={20} />    
                                                        }
                                                    </InputGroup.Text>
                                                </InputGroup>                                                
                                                <p className="login-error-msg my-2 mx-1">
                                                    <ErrorMessage name="password" />
                                                </p>                                                
                                            </div>                                                                            
                                        </div>

                                        <div className="mb-3">
                                            <button 
                                                disabled={!(isValid && dirty)}
                                                style={{
                                                    opacity: !(isValid && dirty) ? 0.76 : 1
                                                }}
                                                className="login-form-btn w-100 p-3"
                                                onSubmit={handleSubmit}
                                                type="submit"
                                            >
                                                {
                                                    signUpRequirements &&
                                                        <span><Spinner size="sm" className="mx-2" /></span>                                                    
                                                }
                                                {
                                                    signUpRequirements 
                                                    ?
                                                        'Creating account...' : 'Register'                                                        
                                                }                                                
                                            </button>
                                        </div>
                                    </div>

                                    <div className="login-signup-container p-5 mb-5">
                                        <div className="mb-4">
                                            <h2 className="login-signup-header mb-4">Already have an account?</h2>
                                            <p className="login-form-caption">
                                                Login with the data you entered during your registration.                                          
                                            </p>
                                        </div> 
                                        <div>
                                            <button 
                                                className="login-signup-btn w-100 p-3"
                                                type='button'
                                                onClick={goToLogin}                                            
                                            >
                                                Log into your account
                                            </button>
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
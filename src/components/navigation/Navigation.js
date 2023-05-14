import React from "react";
import logo from '../../assets/globalassets/logoWithText.png'

import './css/navigation.css'

export default function Navigation(){
    return (
        <nav className="nav-page pb-2" style={{paddingTop: '2%'}}>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img src={logo} />
                </div>
                <div className="d-flex" style={{gap: 25}}>
                    <li className="nav-links">Home</li>
                    <li className="nav-links">Packages</li>
                    <li className="nav-links">Experiences</li>
                    <li className="nav-links">Become a Host</li>
                </div>
                <div className="d-flex" style={{gap: 20}}>
                    <button className="nav-login-btn nav-btn-text px-3 py-2">Log In</button>
                    <button className="nav-signup-btn nav-btn-text px-3 py-2">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}
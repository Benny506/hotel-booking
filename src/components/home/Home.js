import React from "react";
import Navigation from "../navigation/Navigation";

import './css/home.css'
import Header from "./auxiliary/Header";
import Destinations from "./auxiliary/Destinations";
import BecomeAHost from "./auxiliary/BecomeAHost";
import Hotels from "./auxiliary/Hotels";

export default function Home(){
    return (
        <div className="p-0 m-0">

            {/* Navigation */}
            <div className="px-5">
                <div className="px-5">
                    <Navigation />
                </div>
            </div>
            <hr className="m-0 p-0" />


            {/* Header */}
            <div id="header">
                <Header />
            </div>  

            {/* Destinations */}
            <div id="destinations" className="mb-5">
                <Destinations />
            </div>

            <div id="becomeAHost" className="px-5 vertical-spacing">
                <div className="px-4">
                    <BecomeAHost />
                </div>
            </div>

            <div id="hotels" className="vertical-spacing">
                <Hotels />
            </div>
        </div>
    )
}
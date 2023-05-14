import React from "react";
import headerImg2 from '../../../assets/homepage/header/headerImg2.png'
import { BiSearch } from 'react-icons/bi'

// Homepage header Component

export default function Header(){
    return (
        <div className="px-5 pt-3 d-flex flex-column justify-content-between homepage-header-container">
            <div className="px-5 mb-5">
                <div className="py-5">
                    <h1 className="homepage-header mb-3">Vacation Rentals in India</h1>
                    <h3 className="homepage-sub-header">Find and book unique accommodation on Rentals</h3>
                </div>
            </div>
            <div className="mb-5 col-lg-7 px-4">
                <div className="d-flex homepage-search-menu justify-content-between">
                    <div className="px-4 col-lg-3 d-flex justify-content-between flex-column">
                        <div className="d-flex justify-content-between">
                            <div className="pt-3">
                                <h5 className="homepage-search-menu-headers p-0 m-0">Location</h5>
                            </div>
                            <div className="homepage-search-menu-headers-line-border-1 mt-1" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="pb-3">
                                <p className="homepage-search-menu-headers homepage-search-sub-headers p-0 m-0">Going?</p>
                            </div>
                            <div className="homepage-search-menu-headers-line-border-2 mb-1" />
                        </div>
                    </div>
                    <div className="py-3 px-3 col-lg-3">
                        <h5 className="homepage-search-menu-headers p-0 m-0 mb-2">Check-In - Check-Out</h5>
                        <p className="homepage-search-menu-headers homepage-search-sub-headers p-0 m-0">Add dates</p>                            
                    </div>
                    <div className="d-flex homepage-search-input-container px-2 col-lg-6 justify-content-between">
                        <div className="col-lg-6 py-3 px-3"> 
                            <h5 className="homepage-search-menu-headers p-0 m-0 mb-2">Guests</h5>
                            <p className="homepage-search-menu-headers homepage-search-sub-headers p-0 m-0">Add guests</p>                                                                
                        </div>
                        <div className="d-flex homepage-search-input-field align-items-center col-lg-6 my-2 justify-content-center">
                            <div className="col-lg-2">
                                <BiSearch color="#F8F8F8" size={25} />
                            </div>
                            <div className="col-lg-8">
                                <input className="homepage-search-input-field-input border-0 bg-transparent col-lg-10" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex px-5 align-items-center" style={{gap: 5}}>
                <h6 className="homepage-header-a-navs homepage-header-a-navs-header py-0 my-0">Categories:</h6>
                <a className="homepage-header-a-navs">Pet Friendly,</a>
                <a className="homepage-header-a-navs">Corperative Events,</a>
                <a className="homepage-header-a-navs">Family Vacation,</a>
                <a className="homepage-header-a-navs">Romantic Getaways</a>
            </div>
            <div className="mb-5"></div>
            <div>
                <img src={headerImg2} />
            </div>
        </div>          
    )    
}
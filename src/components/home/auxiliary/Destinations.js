import React from "react";
import destinationImg1 from '../../../assets/homepage/destinations/destinationImg1.jpg'
import destinationImg2 from '../../../assets/homepage/destinations/destinationImg2.jpg'
import destinationImg3 from '../../../assets/homepage/destinations/destinationImg3.jpg'
import destinationImg4 from '../../../assets/homepage/destinations/destinationImg4.jpg'
import destinationImg5 from '../../../assets/homepage/destinations/destinationImg5.jpg'

const destinations = [
    { img: destinationImg1, name: 'Goa' },
    { img: destinationImg2, name: 'Himachal Pradesh' },
    { img: destinationImg3, name: 'Kerala' },
    { img: destinationImg4, name: 'Rajasthan' },
    { img: destinationImg5, name: 'Uttarakhand' },
]

export default function Destinations(){

    const displayDestinations = destinations.map((destination, i) => {
        const { img, name } = destination
        const isEven = i % 2 == 0 || i == 0
        return (
            <div key={i} style={{width: '20%'}} className={`${isEven && 'mt-5'}`} >
                <div className={`${isEven && 'mt-3'}`}>
                    <div className="mb-4">
                        <img src={img} className="col-lg-12" />
                    </div>
                    <div>
                        <h6 className="homepage-d-location-name">{name}</h6>
                    </div>                
                </div>
            </div>
        )
    })

    return (
        <div className="px-5 my-5">
            <div className="px-4 my-2">
                <div className="mb-2">
                    <div className="mb-5">
                        <h1 className="homepage-d-header">Choose Your Destination</h1>
                        <h5 className="homepage-d-subheader">Take a look at the best places in the Work</h5>
                    </div>                
                </div>
                <div className="d-flex w-100">
                    { displayDestinations }
                </div>
            </div>
        </div>
    )
}
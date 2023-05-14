import React from "react";
import hotelImg1 from '../../../assets/homepage/hotels/hotelImg1.jpg'
import hotelImg2 from '../../../assets/homepage/hotels/hotelImg2.jpg'
import hotelImg3 from '../../../assets/homepage/hotels/hotelImg3.jpg'
import hotelImg4 from '../../../assets/homepage/hotels/hotelImg4.jpg'

const hotels = [
    {
        img: hotelImg1,
        name: 'Beloshi’s Cliffhanger',
        priceStr: '$45,545',
        priceVal: 45545,
        location: 'Rivers',
        roomCount: 10,
        postedBy: 'Paul'
    },
    {
        img: hotelImg2,
        name: 'Sky Penthouse | Luxurious 3bhk',
        priceStr: '$58,999',
        priceVal: 58999,
        location: 'Port Harcourt',
        roomCount: 10,
        postedBy: 'Jimmy'
    },
    {
        img: hotelImg3,
        name: 'Mystic Abode | An old colonial house',
        priceStr: '$25,045',
        priceVal: 25045,
        location: 'Cross River',
        roomCount: 10,
        postedBy: 'Mr Wick'
    },
    {
        img: hotelImg4,
        name: 'Waking Dream Cottage Bhimtal Lake View',
        priceStr: '$105,505',
        priceVal: 105505,
        location: 'Enugu',
        roomCount: 10,
        postedBy: 'Winsten'
    },            
]

export default function Hotels(){

    const displayHotels = hotels.map((hotel, i) => {
        const { name, priceStr, priceVal, location, roomCount, img, postedBy } = hotel
        return (
            <div className="col-lg-3 homepage-hotels-single-container">
                <div className="col-lg-12">
                    <img src={img} className="col-lg-12 homepage-hotels-img" />
                </div>
                <div className="col-lg-12 p-3">
                    <h3 className="homepage-hotels-name">{name}</h3>
                    <div className="d-flex flex-wrap" style={{gap: 20}}>
                        <p className="homepage-hotels-room-count">{roomCount} bedrooms</p>
                        <p className="homepage-hotels-room-count">{location}</p>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                        <div>
                            <p className="homepage-hotels-location m-0 p-0">Posted by {postedBy}</p>
                        </div>
                        <button className="homepage-hotels-book-btn border-0 px-3 py-2">{priceStr}</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="px-5 my-5">
            <div className="px-4 my-2">
                <div className="mb-2 d-flex justify-content-between align-items-center">
                    <div className="mb-5">
                        <h1 className="homepage-d-header">The very best of our Selections</h1>
                        <h5 className="homepage-d-subheader">Take a look at our finest picks</h5>
                    </div>   
                    <div>
                        <button className="border-0 p-0 m-0 bg-transparent">
                            <p className="homepage-hotels-see-more">See More</p>
                        </button>
                    </div>             
                </div>
                <div className="d-flex flex-wrap w-100 justify-content-between">
                    { displayHotels }
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import Harry from './images/harry.jpg';

const Banner = () => {
    return(
        <div className="banner">
            <img src={Harry} alt="harry" className="harryImage" />   
        </div>
    )
}

export default Banner ;
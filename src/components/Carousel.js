import React from 'react';
import Harry2 from './images/harry-2.jpg';
import Harry3 from './images/harry-3.jpg';
import Harry4 from './images/harry-4.jpg';

const Carousel = () => {
    return(
        <div className="carousel">
            <img src={Harry2} alt="harry2" className="harryImage2" />   
            <img src={Harry3} alt="harry3" className="harryImage3" />   
            <img src={Harry4} alt="harry4" className="harryImage4" />   
        </div>
    )
}

export default Carousel ;
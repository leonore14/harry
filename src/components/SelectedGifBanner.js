import React from 'react';

const SelectedGifBanner = ({ selectedGif4 }) => {
    return(
        <div className='selectedGifBanner'>
            <img src={selectedGif4} alt="gif" className="selectedGif4" />
        </div>
    )
}

export default SelectedGifBanner;
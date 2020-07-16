import React from 'react';

const SelectedGif = ({ selectedGif1, selectedGif2 , selectedGif3 }) => {
    return(
        <div className='selectedGif'>
            <img src={selectedGif1} alt="gif" className="selectedGif1" />
            <img src={selectedGif2} alt="gif" className="selectedGif2" />
            <img src={selectedGif3} alt="gif" className="selectedGif3" />

        </div>
    )
}

export default SelectedGif;
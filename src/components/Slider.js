import React from 'react';
import sliderData from "../data/data.json";

const Slider = () => {
    const slides = sliderData.carouselData;

    return (
    <div>
        {slides.map((s, i) => {
           return( 
                <p>
                    {s.name}
                    {s.price.formattedValue}
                    {s.productImageUrl}
                </p>
            )}
         )}
    </div>
    )
};

export default Slider;
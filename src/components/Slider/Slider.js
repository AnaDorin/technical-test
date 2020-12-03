import React from 'react';
import sliderData from "../../data/data.json";
import Card from "../Card/Card";

const Slider = () => {
    const slides = sliderData.carouselData;

    return (
    <div>
        {slides.map((s, i) => {
           return( 
               <Card index={i} props={slides[i]} />
            )}
         )}
    </div>
    )
};

export default Slider;
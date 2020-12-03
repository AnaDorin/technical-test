import React, { useState, useEffect } from 'react';
import sliderData from "../../data/data.json";
import Card from "../Card/Card";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = sliderData.carouselData;
    const lengthOfSlides = (Number(sliderData.numberOfItems));
    
    const goToTheNextSlide = () => {
        setCurrentSlide(currentSlide === lengthOfSlides - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        setTimeout(goToTheNextSlide, 5000);
        return function() {
            clearTimeout(goToTheNextSlide);
        }
    });

    return (
    <div className={`cards-slider active-slide-${currentSlide}`}>
         <div className="cards-slider-wrapper" style={{
                    'transform': `translateX(-${currentSlide*(100/lengthOfSlides)}%)`
            }}>
            {slides.map((s, i) => {
                return(
                    <Card index={i} props={slides[i]} url={slides[currentSlide].url}/>
                )}
            )}
            </div>
        </div>
    )
};

export default Slider;
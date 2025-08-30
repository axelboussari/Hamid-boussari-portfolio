import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
const [currentIndex, setCurrentIndex] = useState(0);

const goToPrevious = () => {
const isFirstSlide = currentIndex === 0;
const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
setCurrentIndex(newIndex);
};

const goToNext = () => {
const isLastSlide = currentIndex === images.length - 1;
const newIndex = isLastSlide ? 0 : currentIndex + 1;
setCurrentIndex(newIndex);
};

useEffect(() => {
const timer = setInterval(() => {
goToNext();
}, autoPlayInterval);

return () => clearInterval(timer);
}, [currentIndex]);

return (
    <div className="carousel">
        <button onClick={goToPrevious}>Précédent</button>
        <img src={images[currentIndex]} alt={`Diapositive ${currentIndex}`} />
        <button onClick={goToNext}>Suivant</button>
    </div>
    );
};

export default Carousel;
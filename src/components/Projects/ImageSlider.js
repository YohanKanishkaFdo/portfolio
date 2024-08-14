import { useState } from "react";
import left from "../../Assets/icon/38.png"
import right from "../../Assets/icon/39.png"
import './project.css'


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
        <img src={left} alt="about" className="arrow-icon"  />
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
        <img src={right} alt="about" className="arrow-icon"  />
        </div>
      </div>
      <div className="slideStyles" style={slideStylesWidthBackground}></div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            className="dotStyle"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

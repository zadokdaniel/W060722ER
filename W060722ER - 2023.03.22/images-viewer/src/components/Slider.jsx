import { useState } from "react";

const Slider = ({ images = [], infiniteScroll = false, openingImage = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(openingImage);

  const chooseImage = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex >= images.length - 1) {
      if (infiniteScroll) {
        setCurrentIndex(0);
      }

      return;
    }
    setCurrentIndex((index) => index + 1);
  };

  const handlePrevious = () => {
    if (currentIndex <= 0) {
      if (infiniteScroll) {
        setCurrentIndex(images.length - 1);
      }

      return;
    }

    setCurrentIndex((index) => index - 1);
  };

  // handleNext()
  // handlePrev()

  const { src, alt } = images[currentIndex];

  return (
    <div className="slider position-relative">
      <img className="w-100 h-100" src={src} alt={alt} />

      <div className="px-2 w-100 position-absolute top-50 left-0 m-0 d-flex justify-content-between">
        <i
          style={{
            visibility:
              !infiniteScroll && currentIndex === 0 ? "hidden" : "visible",
          }}
          onClick={handlePrevious}
          className="bi bi-caret-left-square-fill text-white"
        ></i>

        <i
          style={{
            visibility:
              !infiniteScroll && currentIndex === images.length - 1
                ? "hidden"
                : "visible",
          }}
          onClick={handleNext}
          className="bi bi-caret-right-square-fill text-white"
        ></i>
      </div>
      <div className="w-100 position-absolute bottom-0 left-0  mb-2  d-flex justify-content-evenly">
        {images.map((image, i) => (
          //   i === currentIndex ? (
          //     <i className="bi bi-circle-fill text-white"></i>
          //   ) : (
          //     <i className="bi bi-circle text-white"></i>
          //   )
          <i
            key={image.id}
            onClick={() => chooseImage(i)}
            className={`bi bi-circle${
              i === currentIndex ? "-fill" : ""
            } text-white`}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default Slider;

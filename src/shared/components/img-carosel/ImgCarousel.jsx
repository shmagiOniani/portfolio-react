import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./img-carousel.scss";

function ImgCarousel({ imgArr }) {
  return (
        <div className="item-slider-wrapper">
          <Carousel
            autoPlay={false}
            interval={2000}
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            {imgArr.map((img, ind) => {
              return (
                <div key={ind} className="item-slider-container">
                  <img src={img} alt="item img" />
                </div>
              );
            })}
          </Carousel>
        </div>
  );
}

export default ImgCarousel;

import React from "react";
import "./style.scss";
import { Images } from "../../../../Shared/Assets";
import { Carousel } from "react-bootstrap";

const BannerSlider = () => {
  return (
    <>
      <Carousel className='banner'>
        <Carousel.Item>
          <a>
            <img
              className="d-block w-100"
              src={Images.b92cc56a7da0a0}
              alt="Alt"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a>
            <img
              className="d-block w-100"
              src={Images.e0ea8218b7bfb5a8}
              alt="Alt"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default BannerSlider;

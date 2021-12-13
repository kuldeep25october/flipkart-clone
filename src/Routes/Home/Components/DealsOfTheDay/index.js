import React from "react";
import "./style.scss";
import { Images } from "../../../../Shared/Assets";
import Carousel from "react-multi-carousel";
//import DealsOfTheDayColumnMap from "../../../../../../Constant/DealsOfTheDayColumnMap";
//import DealsOfTheDayCarousel from '../../../Home/Components/DealsOfTheDay/Components/DealsOfTheDayCarousel'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DealsOfTheDay = () => {
  return (
    <>
      <div className="Container">
        <div className="carouselHeader">
          <div className="title">
            <h2>Deals of the Day</h2>
            <div className="viewAllBtn">
              <input type="button" value="View All" />
            </div>
          </div>
        </div>
        <Carousel responsive={responsive}>
          {/* Item 1 */}
          <div className="carouselItemBody">
            <div className="carouselItemImg">
              <div className="ImageMain">
                <img src={Images.puzzle} />
              </div>
            </div>
            <div className="title">Puzzle</div>
            <div className="text">Extra 5% Off</div>
            <div className="subText">Explore Now!</div>
          </div>
          {/* Item 2 */}
          <div className="carouselItemBody">
            <div className="carouselItemImg">
              <div className="ImageMain">
                <img src={Images.woodland} />
              </div>
            </div>
            <div className="title">Woodland</div>
            <div className="text">Extra 5% Off</div>
            <div className="subText">Explore Now!</div>
          </div>
          {/* Item 3 */}
          <div className="carouselItemBody">
            <div className="carouselItemImg">
              <div className="ImageMain">
                <img src={Images.nautica} />
              </div>
            </div>
            <div className="title">Nautica</div>
            <div className="text">Extra 5% Off</div>
            <div className="subText">Explore Now!</div>
          </div>
          {/* Item 4 */}
          <div className="carouselItemBody">
            <div className="carouselItemImg">
              <div className="ImageMain">
                <img src={Images.loisCaron} />
              </div>
            </div>
            <div className="title">Watch</div>
            <div className="text">Extra 5% Off</div>
            <div className="subText">Explore Now!</div>
          </div>
          {/* Item 5 */}
          <div className="carouselItemBody">
            <div className="carouselItemImg">
              <div className="ImageMain">
                <img src={Images.unitedColors} />
              </div>
            </div>
            <div className="title">UCB</div>
            <div className="text">Extra 5% Off</div>
            <div className="subText">Explore Now!</div>
          </div>
        </Carousel>
        </div>
    </>
  );
};
export default DealsOfTheDay;

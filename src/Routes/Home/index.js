import React from "react";
import Pages from "../../Components/HOC/Page/index";
import BannerSlider from "../Home/Components/CarouselBanner/index";
import ProductsListing from "../Home/Components/ProductsListing/index";
import DealsOfTheDay from "../Home/Components/DealsOfTheDay/index";
import BrandDirectory from '../Home/Components/BrandDirectory/index';
import AboutFlipkart from '../Home/Components/AboutFlipkart/index';

class Home extends React.Component {
  render() {
    return (
      <>
        <Pages showHeader showFooter>
        <ProductsListing />
            <BannerSlider />
            <DealsOfTheDay />
            <BrandDirectory />
            <AboutFlipkart />
        </Pages>
      </>
    );
  }
}
export default Home;

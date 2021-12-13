import React from "react";
import "./style.scss";
import { Images } from "../../../Shared/Assets";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerBody">
          <div className="footerItem">
            <div className="footerItemTitle">ABOUT</div>
            <a href="" className="footerItemContent">
              Contact Us
            </a>
            <a href="" className="footerItemContent">
              About Us
            </a>
            <a href="" className="footerItemContent">
              Careers
            </a>
            <a href="" className="footerItemContent">
              Flipkart Stories
            </a>
            <a href="" className="footerItemContent">
              Press
            </a>
            <a href="" className="footerItemContent">
              Flipkart Wholesale
            </a>
            <a href="" className="footerItemContent">
              Corporate Information
            </a>
          </div>
          <div className="footerItem">
            <div className="footerItemTitle">HELP</div>
            <a href="" className="footerItemContent">
              Payments
            </a>
            <a href="" className="footerItemContent">
              Shipping
            </a>
            <a href="" className="footerItemContent">
              Cancellation & Returns
            </a>
            <a href="" className="footerItemContent">
              FAQ
            </a>
            <a href="" className="footerItemContent">
              Report Infringement
            </a>
          </div>
          <div className="footerItem">
            <div className="footerItemTitle">POLICY</div>
            <a href="" className="footerItemContent">
              Return Policy
            </a>
            <a href="" className="footerItemContent">
              Terms Of Use
            </a>
            <a href="" className="footerItemContent">
              Security
            </a>
            <a href="" className="footerItemContent">
              Privacy
            </a>
            <a href="" className="footerItemContent">
              Sitemap
            </a>
            <a href="" className="footerItemContent">
              EPR Compliance
            </a>
          </div>
          <div className="footerItem">
            <div className="footerItemTitle">SOCIAL</div>
            <a href="" className="footerItemContent">
              Facebook
            </a>
            <a href="" className="footerItemContent">
              Twitter
            </a>
            <a href="" className="footerItemContent">
              YouTube
            </a>
          </div>

          <div className="footerItem">
            <div className="footerItemContainer">
              <div className="footerItemTitle">Mail Us:</div>
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia & </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India</p>
            </div>
          </div>
          <div className="footerItem">
            <div className="footerItemContainr">
              <div className="footerItemTitle">Registered Office Address:</div>
              <p>Flipkart Internet Private Limited, </p>
              <p> Buildings Alyssa, Begonia & </p>
              <p> Clove Embassy Tech Village, </p>
              <p> Outer Ring Road, Devarabeesanahalli Village, </p>
              <p> Bengaluru, 560103, </p>
              <p> Karnataka, India</p>
              <p> CIN : U51109KA2012PTC066107 </p>
              <p>
                Telephone: <a href="">1800 202 9898</a>
              </p>
            </div>
          </div>
          </div>
        <div className='footerBar'>
<div className='footerBarItem'>
<img src={Images.shopping}/>
<a href=''>Sell On Flipkart</a>
</div>
<div className='footerBarItem'>
<img src={Images.star}/>
<a href=''>Advertise</a>
</div>
<div className='footerBarItem'>
<img src={Images.gift}/>
<a href=''>Gift Cards</a>
</div>
<div className='footerBarItem'>
<img src={Images.help}/>
<a href=''>Help Center</a>
</div>
<div className='footerBarItem'>
© 2007-2021 Flipkart.com
</div>
<img src={Images.paymentMethod}/>
          </div>
      </div>
    </>
  );
};
export default Footer;

import React from "react";
import "./style.scss";
import { Images } from "../../../Shared/Assets";
import {
  SearchOutlined,
  HeartFilled,
  DownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { RouteConfig } from "../../../Configure/RouteConfig";
import Router from "../../../Service/RouterService";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="subHeader">
          <div className="logo">
            <a href="">
              <img src={Images.Logo} style={{ width: 75 }} />
            </a>
            <a href="">
              Explore<span>Plus</span>
              <img
                className="plusIcon"
                src={Images.LogoPlus}
                style={{ width: 10 }}
              />
            </a>
          </div>
          <div className="searchBar">
            <input type="text" placeholder="Search here" />
            <a className="searchIcon" href="">
              <SearchOutlined />
            </a>
          </div>
          <div className="loginBtn">
            <input className='submitBtn' type="submit" value="Login" />
          </div>
          <div className="loginHoverList">
            <ul>
              <li>
                <div className="listItemBody">
                  <a href="" style={{ fontWeight: 500 }}>
                    New Customer?
                    <span className="signUp">
                      <a href="" style={{ fontWeight: 500 }}>
                        Sign Up
                      </a>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">My Profile</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Flipkart Plus Zone</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Orders</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Wishlist</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Rewards</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Gift Cards</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="dropDown">
            <button type="button">
              More <DownOutlined />
            </button>
          </div>
          <div className="dropDownHoverList">
            <ul>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">My Profile</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Flipkart Plus Zone</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Orders</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Wishlist</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Rewards</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="listItemBody">
                  <a href="">
                    <HeartFilled />
                    <span className="listItem">Gift Cards</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="cart">
            <label>
              <ShoppingCartOutlined /> Cart
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;


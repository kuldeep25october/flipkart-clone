import React from "react";
import './style.scss'
import { Row, Col,Card } from 'react-bootstrap'
//import { Card } from 'antd';
import { Images } from "../../../../Shared/Assets";

const ProductsListing = () =>{
    return(
        <>
<Row className='productsListingRow'>
    <Col className='productsListingCol'>
        <div className='colContent'><a><img src={Images.f15c02bfeb02d15d}/></a>
<div className='title'>Top Offers</div></div>

    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.f40e9c4d26b}/></a>
<div className='title'>Grocery</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.fddf3c7da4c4f4}/></a>
<div className='title'>Mobiles</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.b3ca5fb2301045}/></a>
<div className='title'>Fashion</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.c6589653afdb9a}/></a>
<div className='title'>Electronics</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.ab7e2b022a4587dd}/></a>
<div className='title'>Home</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.ff199d1bd27eb98}/></a>
<div className='title'>Appliances</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>
<a><img src={Images.a56b4693}/></a>
<div className='title'>Travel</div></div>
    </Col>
    <Col className='productsListingCol'>
    <div className='colContent'>

<a><img src={Images.dff3f7adcf3a90c6}/></a>
<div className='title'>Beauty, Toys & More</div></div>
    </Col>
  </Row>
  
        </>
    )
}
export default ProductsListing;
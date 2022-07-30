import { Route, Link,Routes } from 'react-router-dom';
import Nav from '../Nav';
import Carousel from '../Carousel';
import Slider from "react-slick";
import React,{Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Halley from '../../images/halley.png';
function Result() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
        <div>
        <Nav/>
        <div className='Main-section'></div>
        <div className="Result-section">
        <Slider {...settings}>
          <div className='carouselContent'>
            1
          </div>
          <div className='carouselContent'>
            2
          </div>
          <div className='carouselContent'>
           3
          </div>
          <div className='carouselContent'>
            4            
          </div>
          <div className='carouselContent'>
           5
          </div>
          <div className='carouselContent'>
            6
          </div>
        </Slider>
        </div>
        <div className="informUs">
      <Link to='/result'>냐옹</Link>
      <img className="HalleyLogo"  src={Halley}></img>
      </div>
        </div>);
  }
  
  export default Result;
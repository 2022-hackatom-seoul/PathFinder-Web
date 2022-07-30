import { Route, Link,Routes } from 'react-router-dom';
import Nav from '../Nav';
import Carousel from '../Carousel';
import Slider from "react-slick";
import React,{Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Halley from '../../images/halley.png';
import swapPath from '../../images/swapPath.png'
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
          <div className='carouselContent bestOne'>
            <img style={{margin:'auto'}}src={swapPath}/>
          </div>
          <div className='carouselContent'>
          <img style={{margin:'auto'}}src={swapPath}/>
          </div>
          <div className='carouselContent'>
          <img style={{margin:'auto'}}src={swapPath}/>
          </div>
          <div className='carouselContent'>
          <img style={{margin:'auto'}}src={swapPath}/>            
          </div>
          <div className='carouselContent'>
          <img style={{margin:'auto'}}src={swapPath}/>
          </div>
          <div className='carouselContent'>
          <img style={{margin:'auto'}}src={swapPath}/>
          </div>
        </Slider>
        </div>
        <div className="informUs">
      <img className="HalleyLogo"  src={Halley}></img>
      </div>
        </div>);
  }
  
  export default Result;
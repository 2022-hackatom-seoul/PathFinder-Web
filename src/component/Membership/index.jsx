import { Route, Link,Routes } from 'react-router-dom';
import Nav from '../Nav';
import Carousel from '../Carousel';
import Slider from "react-slick";
import React,{Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Halley from '../../images/halley.png';
import swapPath from '../../images/swapPath.png'
function Membership() {
    
   
      return (
        <div>
       <Nav/>
      <div className="Main-section">
      </div>
      <div className="Main-content">
          <h2 style={{color:'white',marginTop:'-40px',marginBottom:'50px'}}>Membership</h2>
          <div style={{display:"flex",flexDirection:'row',justifyContent:'space-around'}} className="memberships">
            <div style={{width:'30%',height:'430px',borderRadius:'30px',backgroundColor:'white',textAlign:'center'}} className="membership-indv">
                <h1 style={{color:'black',fontSize:'25px',marginTop:'40px'}}>Small</h1>
                <p style={{color:'black',fontSize:'15px'}}>The basics for individuals</p>
                <p style={{color:'black',fontSize:'15px'}}> and organizations</p>
                <button style={{margin:'auto'}}>Buy!</button>
            </div>
            <div style={{width:'30%',height:'430px',borderRadius:'30px',backgroundColor:'white',textAlign:'center'}} className="membership-indv">
                <h1 style={{color:'black',fontSize:'25px',marginTop:'40px'}}>Medium</h1>
                <p style={{color:'black',fontSize:'15px'}}>The advanced for individuals </p>
                <p style={{color:'black',fontSize:'15px'}}> and organizations</p>
                <button style={{margin:'auto'}}>Buy!</button>
            </div>
            <div style={{width:'30%',height:'430px',borderRadius:'30px',backgroundColor:'white',textAlign:'center'}} className="membership-indv">
                <h1 style={{color:'black',fontSize:'25px',marginTop:'40px'}}>Large</h1>
                <p style={{color:'black',fontSize:'15px'}}>The special mebership for individuals</p>
                  <p style={{color:'black',fontSize:'15px'}}> and organizations</p>
                  <button style={{margin:'auto'}}>Buy!</button>
            </div>
          </div>
      </div>
      <div className="informUs">
      <img className="HalleyLogo" src={Halley}></img>
      </div>
        </div>);
  }
  
  export default Membership;
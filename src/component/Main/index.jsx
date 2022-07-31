import './index.css';
import Nav from '../Nav';

import Logo from '../../images/Logo.png';
import Halley from '../../images/halley.png';
import mac from '../../images/mac.png';
import { Route, Link,Routes } from 'react-router-dom';
function Main() {
  return (
    <div className="Main">

      <Nav/>
      <div className="Main-section">
      </div>
      <div className="Main-content">
          <h1>LOW RISK</h1>
          <h1>HIGH SWAP</h1>
          <p style={{fontSize:'20px',color:'white'}}>The Aggrigator Platform for the most efficient swap path in the IBC ecosystem.</p>
          {/* <button>About Us</button> */}
          <br></br>
          <img className="mac" src={mac} />
      </div>
      <div className="informUs">
      <img className="HalleyLogo" src={Halley}></img>
      </div>
    </div>
  );
}

export default Main;
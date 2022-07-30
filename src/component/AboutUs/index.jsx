import './index.css';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';

function AboutUs() {
    return (
      <div className="AboutUs">
        About us
        <div className="informUs">
      <img className="HalleyLogo" src={Halley}></img>
      </div>
      </div>
      
    );
  }
  
  export default AboutUs;
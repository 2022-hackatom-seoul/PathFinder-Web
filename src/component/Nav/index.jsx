import './index.css';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';
function Nav() {
    return (
      <div className="Nav">
        <Link to='/'>
        <img  src={Halley}/></Link>
        <div  className="Nav-buttons">
        <div className="Nav-button">
            <Link to='/assets'>
        <button>Assets</button></Link>
        <Link to='/calculator'>
        <button>Calculator</button></Link>
        <Link to='/aboutus'>
        <button>About Us</button></Link>
        </div>
        <button className="Connect-button">CONNECT</button>
        </div>
        
      </div>
    );
  }
  
  export default Nav;
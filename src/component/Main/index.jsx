import './index.css';
import Nav from '../Nav';

import Logo from '../../images/Logo.png';
import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';
function Main() {
  return (
    <div className="Main">

      <Nav/>
      <div className="Main-section">
      </div>
      <div className="Main-content">
          <h1>LOW RISK</h1>
          <h1>HIGH RETURN</h1>
      </div>
      <img style={{width:'50%',
    height: '200px',
    margin: 'auto',
    position: 'absolute',
    top: '60vh',
    left: '15%'}}src={Logo}/>
      <div className="informUs">
      <Link to='/result'>냐옹</Link>
      <img className="HalleyLogo" src={Halley}></img>
      </div>
    </div>
  );
}

export default Main;
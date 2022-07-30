import './index.css';
import Nav from '../Nav';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';
function Main() {
  return (
    <div className="Main">

      <Nav/>
      <div className="Main-section">
      <div>
          냐옹
      </div>
      <div>
        냐옹
      </div>
      </div>
      <div className="informUs">
      <Link to='/result'>냐옹</Link>
      <img className="HalleyLogo" src={Halley}></img>
      </div>
    </div>
  );
}

export default Main;
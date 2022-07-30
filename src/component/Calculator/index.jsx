import './index.css';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';

function Calculator() {
    return (
      <div className="Calculator">
        calculator
        <div className="informUs">
        <img className="HalleyLogo" src={Halley}></img>
      </div>
      </div>
    );
  }
  
  export default Calculator;
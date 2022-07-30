import './index.css';
import { Route, Link,Routes } from 'react-router-dom';
import Nav from '../Nav'

import Halley from '../../images/halley.png';
function Assets() {
    var assets=[

    ]
    return (
      <div className="Assets">
        <Nav/>
      <div className="Main-section">
      </div>
      <div className="Asset-section">
        <div className="MyAssets">
            <div className="MyAssets-bar">
            <h2>My Assets</h2>
            <select name="chain">
    <option value="">Select Chain</option>
    <option value="Juno">Juno</option>
    <option value="Osmosis" selected="selected">Osmosis</option>
 
</select>
            </div>
        </div>
        <div className="Assets-sub">
            <div className="Assets-sub-bar">
            <h2>Assets</h2>
            </div>

        </div>
      </div>
      <div className="informUs">
      <img className="HalleyLogo" src={Halley}></img>
      </div>
      </div>
    );
  }
  
  export default Assets;
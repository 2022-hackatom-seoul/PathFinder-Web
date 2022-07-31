import './index.css';
import Nav from '../Nav';
import Halley from '../../images/halley.png';
import Slippage from '../../images/slippage.png';
import Juno from '../../images/juno.png';
import Osmo from '../../images/osmo.png';
import Atom from '../../images/atom.png';
import Evmos from '../../images/evmos.png';
import OsmosisAsset from '../../images/osmo-asset.png'
import JunoAsset from '../../images/Juno-asset.png'
import { Route, Link,Routes } from 'react-router-dom';
import settings from '../../images/settings.png';
function Calculator() {
    return (
        <div className="Calculator">
        <Nav/>
        <div className="Main-section">
        </div>
        <div className="Calculator-content">
            <div className='JunoOsmosis'>
                <div className='Juno'>
                    <div className='title'>
                        <img  style={{width:'40px',height:'40px'}}src={Juno}/>
                        <h1>Juno</h1>
                    </div>
                    {/*여기가 바로 데이터가 바 */}
                    <div className='title-content'>
                    <img src={JunoAsset}/>
                    </div>
                </div>
                <div className='Osmosis'>
                    <div className='title'>
                        <img style={{width:'40px',height:'40px'}} src={Osmo}/>
                        <h1>Osmosis</h1>
                    </div>
                    <div className='title-content'>
                        <img src={OsmosisAsset}/>
                    </div>
                </div>
            </div>
            <div className='ChainSwap'>
                <div className='ChainType'>
                <div className='title-2'>
                        <h1>Chain Type</h1>
                    </div>
                    <select name="chain">
    <option value="">Select Chain</option>
    <option value="Juno">Juno</option>
    <option value="Osmosis" selected="selected">Osmosis</option>
 
</select>
                </div>
                <div className='SwapType'>
                <div className='title-2'>
                        <h1>Swap Type</h1>
                    </div>
                    <select style={{width:'80px'}}name="chain">
    <option value="">Select Swap</option>
    <option value="Juno">Atom</option>
    <option value="Osmosis" selected="selected">Osmo</option>
 
</select>
<input style={{padding:'0 20px',marginBottom:'20px',height:'30px',borderRadius:"30px"}}/>
<hr style={{width:'300px'}}/>
<img style={{width:'300px'}}src={Slippage}/>
<Link to='/result'><button  style={{background:'linear-gradient(to right, rgba(161, 140, 209, 1), rgba(251, 194, 235, 1))',border:'none',borderRadius:"20px",height:'50px',marginTop:'20px'}}>CALCULATE</button></Link>
                </div>
                {/* <hr style={{width:'300px',backgroundColor:'black'}}/>
                <img src={settings} style={{width:'35px'}}/> */}
            </div>
            
        </div>

        <div className="informUs">
        <img className="HalleyLogo" src={Halley}></img>
        </div>
      </div>
    );
  }
  
  export default Calculator;
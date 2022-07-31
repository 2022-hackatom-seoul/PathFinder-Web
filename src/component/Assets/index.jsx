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
            <div style={{width:'70%',display:'flex',flexDirection:"row"}}>
            <div style={{margin:'40px'}}><h3 style={{color:'white'}}>Total Assets</h3><h1 style={{color:'white'}}>$45.11</h1></div>
            <div style={{margin:'40px'}}><h3 style={{color:'white'}}>Unbonded Assets</h3><h1 style={{color:'white'}}>$45.11</h1></div>
            <div style={{margin:'40px'}}><h3 style={{color:'white'}}>Bonded Assets</h3><h1 style={{color:'white'}}>$0</h1></div>
            </div>
        </div>
        <div className="Assets-sub">
            <div className="Assets-sub-bar">
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           <h2>Assets</h2>
            <input style={{padding:'0 20px',marginRight:'20px',height:'30px',borderRadius:"30px"}}/>
            
           </div>
           <div style={{width:'70%',margin:'auto',marginLeft:'155px'}} className="indv-asset">
                <h3>Asset/Chain</h3>
                <p>Balance</p>
                <p>Deposit</p>
                <p>Withdraw</p>
              </div>
           <div className='total-assets'>
              <div className="indv-asset">
                <h3>OSMO</h3>
                <p>0</p>
    
                <p>Deposit</p>
                <p>Withdraw</p>
              </div>
              <div className="indv-asset"><h3>ATOM</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
                
              <div className="indv-asset"><h3>JUNO</h3>
                <p>9.99</p><p>Deposit</p>
                <p>Withdraw</p></div>
              <div className="indv-asset"><h3>WETH</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
              <div className="indv-asset"><h3>OSMO</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
              <div className="indv-asset"><h3>OSMO</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
              <div className="indv-asset"><h3>OSMO</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
              <div className="indv-asset"><h3>OSMO</h3>
                <p>0</p><p>Deposit</p>
                <p>Withdraw</p></div>
            </div>
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
import './index.css';
import { useSigningClient } from '../cosmwasm'
import {SigningCosmosClient} from "@cosmjs/stargate"
import Logo from '../../images/Logo.png';
import { Route, Link,Routes } from 'react-router-dom';
function Nav() {
    return (
      <div className="Nav">
        <Link to='/'>
        <img  style={{width:"240px",height:"40px"} }src={Logo}/></Link>
        <div  className="Nav-buttons">
        <div className="Nav-button">
            <Link to='/assets'>
        <button className="Onebutton">Assets</button></Link>
        <Link to='/calculator'>
        <button className="Onebutton">Calculator</button></Link>
        <Link to='/'>
        <button className="Onebutton">About Us</button></Link>
        <Link to='/membership'>
        <button className="Onebutton">Membership</button></Link>
        </div>
        <button className="Connect-button" onClick={connectWallet}>CONNECT</button>
        </div>

      </div>
    );
  }

  function connectWallet() {
    var chainId = "uni-3";
    window.keplr.enable(chainId);
    const offlineSigner = window.getOfflineSigner(chainId);
    const accounts = offlineSigner.getAccounts();
    const cosmJS = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app/rest",
        accounts[0].address,
        offlineSigner,
    );
  }
  
  export default Nav;
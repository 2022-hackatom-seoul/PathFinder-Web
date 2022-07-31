import React from "react";
import {SigningCosmosClient} from "@cosmjs/stargate"
export default class Eaxmple extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "CONNECT",
        };
      }
      changeText = () => {
        this.setState({
          text: "juno1p",
        });
      };
      connectWallet = () => {
        var chainId = "uni-3";
        window.keplr.enable(chainId);
        const offlineSigner = window.getOfflineSigner(chainId);
        const accounts = offlineSigner.getAccounts();
        const cosmJS = new SigningCosmosClient(
            "https://lcd-cosmoshub.keplr.app/rest",
            accounts[0].address,
            offlineSigner,
        );
      };
  render() {
    return    <button className="Connect-button" onClick={this.connectWallet, this.changeText}></button>;
  }
}
import { createContext, useContext } from 'react';
import { useSigningCosmWasmClient, } from './cosmwasmhook';
import React from 'react';
let CosmWasmContext;
let { Provider } = (CosmWasmContext =
    createContext({
        walletAddress: '',
        client: null,
        signingClient: null,
        loading: false,
        error: null,
        connectWallet: () => { },
        disconnect: () => { },
    }));
export const useSigningClient = () => useContext(CosmWasmContext);
export const SigningCosmWasmProvider = ({ children, }) => {
    const value = useSigningCosmWasmClient();
    return React.createElement(Provider, { value: value }, children);
};
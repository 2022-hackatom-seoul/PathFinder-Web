import { useState } from 'react';
import { connectKeplr } from './keplr';
import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
const PUBLIC_RPC_ENDPOINT = process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT || '';
const PUBLIC_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
export const useSigningCosmWasmClient = () => {
    const [client, setClient] = useState(null);
    const [signingClient, setSigningClient] = useState(null);
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const connectWallet = async () => {
        setLoading(true);
        try {
            await connectKeplr();
            // enable website to access kepler
            await window.keplr.enable(PUBLIC_CHAIN_ID);
            // get offline signer for signing txs
            const offlineSigner = await window.getOfflineSigner(PUBLIC_CHAIN_ID);
            // make client
            setClient(await CosmWasmClient.connect(PUBLIC_RPC_ENDPOINT));
            // make client
            setSigningClient(await SigningCosmWasmClient.connectWithSigner(PUBLIC_RPC_ENDPOINT, offlineSigner));
            // get user address
            const [{ address }] = await offlineSigner.getAccounts();
            setWalletAddress(address);
            setLoading(false);
        }
        catch (error) {
            setError(error);
        }
    };
    const disconnect = () => {
        if (signingClient) {
            signingClient.disconnect();
        }
        setWalletAddress('');
        setSigningClient(null);
        setLoading(false);
    };
    return {
        walletAddress,
        signingClient,
        loading,
        error,
        connectWallet,
        disconnect,
        client
    };
};

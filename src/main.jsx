import { Buffer } from 'buffer';
window.Buffer = Buffer;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    ConnectionProvider,
    WalletProvider
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import App from './App';
import './index.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import Navbar from './Navbar'
import Hero from './Hero';
import Footer from './Footer';

const endpoint = import.meta.env.VITE_SOLANA_DEVNET_RPC_URL;

console.log("Solana RPC URL:", endpoint);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <Navbar />
                    <Hero />
                    <App />
                    <Footer />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </React.StrictMode>,
);

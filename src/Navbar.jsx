import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/src/assets/logo.png" alt="logo" />

            </div>
            <div className="walletButtons">
                <WalletMultiButton />
                <WalletDisconnectButton />
            </div>
        </div>
    );
}

export default Navbar;
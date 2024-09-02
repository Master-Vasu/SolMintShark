import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function App() {
    const { connection } = useConnection();
    const { publicKey, signTransaction } = useWallet();
    const [tokenAddress, setTokenAddress] = useState(null);

    const createToken = async () => {
        if (!publicKey) return;

        const mint = await createMint(
            connection,
            publicKey,
            publicKey,
            null,
            9 // decimals
        );

        setTokenAddress(mint.toBase58());
    };

    const mintTokens = async () => {
        if (!publicKey || !tokenAddress) return;

        const mint = new PublicKey(tokenAddress);
        const tokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            publicKey,
            mint,
            publicKey
        );

        await mintTo(
            connection,
            publicKey,
            mint,
            tokenAccount.address,
            publicKey,
            1000 * 10 ** 9 // minting 1000 tokens
        );

        alert('Tokens minted successfully!');
    };

    return (
        <div className="App">
            <WalletMultiButton />
            <button onClick={createToken} disabled={!publicKey}>
                Create Token
            </button>
            <button onClick={mintTokens} disabled={!publicKey || !tokenAddress}>
                Mint Tokens
            </button>
            {tokenAddress && <p>Token Address: {tokenAddress}</p>}
        </div>
    );
}

export default App;

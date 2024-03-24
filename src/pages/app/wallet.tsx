import { useEndpointRequest } from '@/utils/app/hooks/useEndpoint';
import useNFTContract from '@/utils/app/hooks/useNFTContract';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import { useEffect, useState } from 'react';

export default function Wallet() {
	const { connectWallet, state } = useWeb3Provider();
	const [loading, setLoading] = useState(true);
	const { mint } = useNFTContract();

	async function tryToConnectWallet() {
		console.log('Trying to connect wallet');
		const data = await connectWallet();
		console.log('Connected wallet');
		setLoading(false);
	}

	async function tryToMint() {
		console.log('Trying to mint');

		if (!state.signer) {
			console.log('No signer');
			return;
		}

		console.log('Trying to mint');
		const data = await mint(
			'https://ipfs.io/ipfs/QmZz1kL1YFvKtB3zH5Kt5XV7yV6K5sQ7yQ7zG7zQ7zG7zQ',
			'0xd9a0f37b2AB92b3b95A38deCf238C5981878c205'
		);
		console.log('Minted');
		console.log(data);
	}

	useEffect(() => {
		console.log(state);
		tryToConnectWallet();
	}, []);

	if (loading || !state.signer) {
		return <div>Loading...</div>;
	}

	return (
		<div className="mt-12 ml-12 z-40">
            <div onClick={() => tryToMint()}>Mintar</div>
            <button onClick={() => useEndpointRequest('/eth/token', 'POST', {
                ammount: 12,
                to: '0xd9a0f37b2AB92b3b95A38deCf238C5981878c205'
            })}>Mintar token</button>

			<p>{state.address}</p>
		</div>
	);
}

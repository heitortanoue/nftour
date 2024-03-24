import useNFTContract from '@/utils/app/hooks/useNFTContract';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import { useEffect, useState } from 'react';

export default function Album() {
	const { state, loading } = useWeb3Provider();
	const nftContract = useNFTContract();
	const [NFTs, setNFTs] = useState([]);

	console.log('NFTs', NFTs);

	async function getNFTs() {
		if (!state.address) return;
		await nftContract.getUserNFTs(state.address).then((res) => {
			setNFTs(res);
		});
	}

	useEffect(() => {
		if (!state.address) return;

		getNFTs();
	}, [state.address, loading]);

	if (loading) {
		return <div>Conectando...</div>;
	}

	if (!NFTs || NFTs.length === 0) {
		return <div>Nenhum NFT encontrado</div>;
	}

	return (
		<div>
			<h1>Meus NFTs</h1>
			<div>
				{NFTs.map((NFT, index) => (
					<div key={index}>{NFT}</div>
				))}
			</div>
		</div>
	);
}

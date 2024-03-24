import useNFTContract from '@/utils/app/hooks/useNFTContract';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import { NFT_MAP } from '@/utils/server/functions/misc/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Album() {
	const { state, loading } = useWeb3Provider();
	const nftContract = useNFTContract();
	const [NFTs, setNFTs] = useState<string[]>([]);

	NFT_MAP.forEach((NFT) => {
		if (NFTs.includes(NFT.image)) {
			Object.assign(NFT, { collected: true });
		} else {
			Object.assign(NFT, { collected: false });
		}
	});

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

	console.log('NFT_MAP', NFT_MAP);

	return (
		<div className="p-4">
			<h1 className="text-center">Meus NFTs</h1>
			<div className="pt-12 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
				{NFT_MAP.map((NFT, index) => (
					<div key={index} className="flex justify-center">
						<Image
							src={NFT.image}
							alt={NFT.name}
							width="200"
							height="200"
							className={`${
								(
									NFT as {
										name: string;
										image: string;
										location: string;
										collected: boolean;
									}
								).collected === true
									? ''
									: 'grayscale blur-[2px] cursor-not-allowed'
							}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

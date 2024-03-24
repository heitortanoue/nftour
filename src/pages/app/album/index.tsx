import { Section } from '@/components/custom/section';
import useNFTContract from '@/utils/app/hooks/useNFTContract';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import { NFT_MAP } from '@/utils/server/functions/misc/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Album() {
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
			<Section.Title>Meus NFTs</Section.Title>
			<div className="pt-12 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
				{NFT_MAP.map((NFT, index) => (
					<Link
						href={`/app/album/${index}`}
						key={index}
						className={`flex justify-center ${
							NFT.collected === false ? 'pointer-events-none' : ''
						}`}
						aria-disabled={NFT.collected === false}
						tabIndex={NFT.collected === false ? -1 : undefined}
					>
						<Image
							src={NFT.image}
							alt={NFT.name}
							width="200"
							height="200"
							className={`${NFT.collected === true ? '' : 'grayscale blur-[2px]'}`}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Album;

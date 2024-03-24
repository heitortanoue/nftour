import Frame from '@/components/custom/frame';
import Layout from '@/components/custom/layout';
import { Section } from '@/components/custom/section';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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

	const mappedNFTs = NFT_MAP.map((NFT) => {
		return { ...NFT, collected: NFTs.includes(NFT.image) };
	});

	async function getNFTs() {
		if (!state.address) return;
		const res = await nftContract.getUserNFTs(state.address);
		if (!res) return;
		setNFTs(res);
	}

	useEffect(() => {
		if (!state.address) return;

		getNFTs();
	}, [state.address, state.isAuthenticated]);

	if (loading) {
		return (
			<Layout>
				<Frame>Conectando...</Frame>
			</Layout>
		);
	}

	if (!NFTs || NFTs.length === 0) {
		return (
			<Layout>
				<Frame>
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-3">
							No NFT collected yet. Go to the hunt!
						</h1>
						<Button>
							<Link href="/app/hunt">Go to the hunt</Link>
						</Button>
					</div>
				</Frame>
			</Layout>
		);
	}

	return (
		<Layout>
			<Frame>
				<h1 className="font-pixel text-4xl text-center">My Album</h1>
				<div className="pt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
					{mappedNFTs.map((NFT, index) => (
						<Link
							href={`/app/album/${index}`}
							key={index}
							className={`flex justify-center bg-white p-3 rounded-lg border ${
								NFT.collected === false ? 'pointer-events-none' : ''
							}`}
							aria-disabled={NFT.collected === false}
							tabIndex={NFT.collected === false ? -1 : undefined}
						>
							<Image
								src={NFT.image}
								alt={NFT.name}
								width="150"
								height="150"
								className={cn(
									'hover:scale-110 transition-transform',
									`${NFT.collected === true ? '' : 'grayscale blur-[2px]'}`
								)}
							/>
						</Link>
					))}
				</div>
			</Frame>
		</Layout>
	);
}

export default Album;

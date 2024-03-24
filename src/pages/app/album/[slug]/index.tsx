import Image from 'next/image';
import { useRouter } from 'next/router';
import { NFT_MAP } from '@/utils/server/functions/misc/constants';
import { Section } from '@/components/custom/section';

const NFTContent = () => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const slug = router.query.slug as unknown;
	const selectedNFT = NFT_MAP[slug as number];

	return (
		<div className="flex flex-col items-center p-4">
			<Image src={selectedNFT.image} alt={selectedNFT.name} width="200" height="200" />
			<Section.Title>{selectedNFT.location}</Section.Title>
			<Section.Subtitle>{selectedNFT.name}</Section.Subtitle>
		</div>
	);
};

export default NFTContent;

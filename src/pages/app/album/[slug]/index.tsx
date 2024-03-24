import Image from 'next/image';
import { useRouter } from 'next/router';
import { NFT_MAP } from '@/utils/server/functions/misc/constants';
import Layout from '@/components/custom/layout';
import Frame from '@/components/custom/frame';

export async function getServerSideProps(ctx) {
    const { slug } = ctx.query;
    console.log(`getServerSideProps: slug=${slug}`);
    return {
        props: {
            slug
        }
    };
}

const NFTContent = ({ slug }: {
    slug: number;
}) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

    const selectedNFT = NFT_MAP[slug];

    if (!selectedNFT) {
        return <div>Not found</div>;
    }

	return (
		<Layout>
			<div className="bg-gray-100 h-full flex">
				<Frame className="flex flex-col gap-3 items-center m-auto p-10 border rounded-xl shadow-md bg-white w-fit">
					<Image
						src={selectedNFT.image}
						alt={selectedNFT.name}
						width="200"
						height="200"
					/>
					<div className="font-pixel text-2xl">{selectedNFT.location}</div>
					<div>{selectedNFT.name}</div>
				</Frame>
			</div>
		</Layout>
	);
};

export default NFTContent;

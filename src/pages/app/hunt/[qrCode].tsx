import Frame from '@/components/custom/frame';
import Layout from '@/components/custom/layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { endpointRequest } from '@/utils/app/hooks/useEndpoint';
import { useLocation } from '@/utils/app/hooks/useLocation';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import {
	LOCATION_MAP,
	MAX_DISTANCE_IN_METERS,
	NFT_MAP,
	ROUTES
} from '@/utils/server/functions/misc/constants';
import { QRCode } from '@/utils/server/models';
import { useRouter } from 'next/router';
import { useState } from 'react';

export async function getServerSideProps(context: any) {
	const { qrCode } = context.query;

	if (!qrCode) {
		return {
			notFound: true
		};
	}

	const code = await QRCode.findOne({ _id: qrCode }, { projection: { _id: 1, location: 1 } });
	if (!code) {
		return {
			notFound: true
		};
	}

	const locationDetails = LOCATION_MAP.find(
		(location) => location.location_name === code.location
	);
	if (!locationDetails) {
		return {
			notFound: true
		};
	}

	const nft = NFT_MAP.find((nft) => nft.location === locationDetails.location_name);

	return {
		props: {
			location: locationDetails,
			nft
		}
	};
}

export default function QRCodeScreen({
	location,
	nft
}: {
	location: (typeof LOCATION_MAP)[0];
	nft: (typeof NFT_MAP)[0];
}) {
	const { error: pError, position } = useLocation();
	const [loading, setLoading] = useState(false);
	const { state } = useWeb3Provider();
	const router = useRouter();
	const { toast } = useToast();

	if (pError) {
		return (
			<Layout>
				<Frame>Enable your location to use this service</Frame>
			</Layout>
		);
	}

	const [latitude, longitude] = position;
	if (
		!isWithinMaxDistance(
			[latitude, longitude],
			location.location_coordinates,
			MAX_DISTANCE_IN_METERS / 1000
		)
	) {
		return (
			<Layout>
				<Frame className="flex gap-5 flex-col items-center m-auto">
					<i className="fa-solid fa-map-pin text-4xl" aria-hidden />
					<div>Out of the check-in area for this Point</div>
					<Button className="mt-3" onClick={() => window.location.reload()}>
						Try again
					</Button>
				</Frame>
			</Layout>
		);
	}

	if (!state || !state.address) {
		return (
			<Layout>
				<Frame>
					<div className="flex gap-5 flex-col items-center">
						<i className="fa-solid fa-user-circle text-4xl" aria-hidden />
						<div>Connect your wallet to use this service</div>
						<Button className="mt-3" onClick={() => window.location.reload()}>
							Try again
						</Button>
					</div>
				</Frame>
			</Layout>
		);
	}

	async function addNFTToWallet() {
		setLoading(true);
		const res = await endpointRequest('/eth/token', 'POST', {
			to: state.address as string,
			nft_url: nft.image
		});

		if (!res.success) {
			toast({
				variant: 'destructive',
				title: 'Error adding NFT to wallet',
				description: 'Please try again later'
			});
			setLoading(false);
			return;
		}

		toast({
			title: 'NFT and TourTokens added to wallet'
		});
		setLoading(false);
		router.push(ROUTES.APP);
	}

	return (
		<Layout>
			<div className="flex flex-col gap-3 items-center mt-10">
				<div className="">You got it!</div>
				<h1 className="font-bold text-xl">{nft.name}</h1>
				<img className="rounded-lg" src={nft.image} />
				<div className="flex gap-2 items-center">
					<i className="fa-solid fa-map-pin" aria-hidden />
					<div>NFT do {location.location_name}</div>
				</div>
				{!loading ? (
					<Button className="mt-3" onClick={() => addNFTToWallet()}>
						Add it to your wallet
					</Button>
				) : (
					<Button className="mt-3" disabled>
						<div className="animate-pulse w-6 h-6 border-t-2 border-b-2 border-secondary mr-2 rounded-full" />
						<div>Loading</div>
					</Button>
				)}
			</div>
		</Layout>
	);
}

function isWithinMaxDistance(
	pos1: [number, number],
	pos2: [number, number],
	maxDistanceInKm: number
): boolean {
	if (!pos1 || !pos2) return false;

	const [lat1, lon1] = pos1;
	const [lat2, lon2] = pos2;

	const earthRadiusKm = 6371; // Earth's radius in kilometers

	const dLat = degreesToRadians(lat2 - lat1);
	const dLon = degreesToRadians(lon2 - lon1);

	const lat1Rad = degreesToRadians(lat1);
	const lat2Rad = degreesToRadians(lat2);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distance = earthRadiusKm * c; // Distance in kilometers

	return distance <= maxDistanceInKm;
}

function degreesToRadians(degrees: number): number {
	return (degrees * Math.PI) / 180;
}

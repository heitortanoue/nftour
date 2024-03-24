import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useLocation } from '@/utils/app/hooks/useLocation';
import { Icon } from 'leaflet';
import {
	LOCATION_MAP,
	MAX_DISTANCE_IN_METERS,
	NFT_MAP
} from '@/utils/server/functions/misc/constants';

const Map = () => {
	const { position, error: getPositionError } = useLocation();

	return (
		<MapContainer center={position} zoom={0} style={{ height: '100%', width: '100%' }}>
			<ChangeView center={position} zoom={15} />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Circle center={position} radius={MAX_DISTANCE_IN_METERS} />
			{!getPositionError && (
				<Marker
					position={position}
					icon={
						new Icon({
							iconUrl: './user-location.png',
							iconSize: [32, 32],
							iconAnchor: [16, 16]
						})
					}
				/>
			)}

			{LOCATION_MAP.map((nft, index) => {
				const foundIcon = NFT_MAP.find((nftMap) => nftMap.location === nft.location_name);

				return (
					<Marker
						key={index}
						position={nft.location_coordinates}
						icon={
							new Icon({
								iconUrl: foundIcon?.image,
								iconSize: [64, 64],
								iconAnchor: [32, 32],
							})
						}
					>
						<Popup className="flex flex-col justify-center items-center gap-4">
							<img
								src={foundIcon?.image}
								alt={foundIcon?.name}
								className="w-28 h-28 object-cover rounded-lg"
							/>
							<div>{nft.location_name}</div>
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
	const map = useMap();
	map.setView(center, zoom);
	return null;
}

export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { useLocation } from '@/utils/app/hooks/useLocation';
import { Icon } from 'leaflet';

const Map = () => {
	const { position, error: getPositionError } = useLocation();

	return (
		<MapContainer center={position} zoom={0} style={{ height: '100%', width: '100%' }}>
			<ChangeView center={position} zoom={15} />
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{!getPositionError && (
				<Marker
					position={position}
					icon={
						new Icon({
							iconUrl:
								'https://i.ibb.co/HDxYY4J/DALL-E-2024-03-23-01-31-36-Design-a-cartoon-style-badge-featuring-a-character-based-on-a-black-man-p.png',
							iconSize: [64, 64],
							iconAnchor: [32, 32]
						})
					}
				>
					<Popup>Hey ! I live here</Popup>
				</Marker>
			)}
		</MapContainer>
	);
};

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
	const map = useMap();
	map.setView(center, zoom);
	return null;
}

export default Map;

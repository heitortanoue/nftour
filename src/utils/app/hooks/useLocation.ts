import { useState, useEffect } from 'react';

export const useLocation = () => {
	const [position, setPosition] = useState<[number, number]>([0, 0]);
	const [error, setError] = useState<string | undefined>();

	const onChange = ({ coords }: any) => {
		setPosition([coords.latitude, coords.longitude]);
	};
	const onError = (error: any) => {
		setError(error.message);
	};
	useEffect(() => {
		const geo = navigator.geolocation;
		if (!geo) {
			setError('Geolocation is not supported');
			return;
		}

		const watcher = geo.watchPosition(onChange, onError);
		return () => geo.clearWatch(watcher);
	}, []);
	return { position, error };
};

export const ROUTES = {
	HOME: '/',
	APP: '/app',
	ALBUM: '/app/album',
	WALLET: '/app/wallet',
	COUPONS: '/app/coupons',
	SCAN: '/app/scan',
	LOGIN: '/login'
};

export const LOCATION_MAP: {
	location_name: string;
	location_coordinates: [number, number];
}[] = [
	{
		location_name: 'Batata de Marechal',
		location_coordinates: [-22.861324525456254, -43.37028224314826]
	},
	{
		location_name: 'Museu de Arte Contemporânea de Niterói',
		location_coordinates: [-22.907516335038302, -43.12577911751845]
	},
	{
		location_name: 'Theatro Municipal do Rio de Janeiro',
		location_coordinates: [-22.908949232842335, -43.17657895961861]
	},
	{
		location_name: 'Cristo Redentor',
		location_coordinates: [-22.951947126320782, -43.21048630279169]
	},
	{
		location_name: 'ETHSamba Hack',
		location_coordinates: [-22.980599299585155, -43.2168431149823]
	}
];

export const NFT_MAP = [
	{
		name: 'Marechal com sua clássica sacola de batata e frango',
		image: 'https://i.ibb.co/MBNRbVp/Batata-de-Marechal.png',
		location: 'Batata de Marechal'
	},
	{
		name: 'ETHSamba Hack',
		image: 'https://i.ibb.co/wgcqfVT/download.jpg',
		location: 'ETHSamba Hack'
	},
	{
		name: 'Museu de Arte Contemporânea de Niterói',
		image: 'https://i.ibb.co/ChVZ29S/Oscar-Niemieyer-psd.png',
		location: 'Museu de Arte Contemporânea de Niterói'
	},
	{
		name: 'Ilustração do Cristo Redentor',
		image: 'https://i.ibb.co/zxH2DQH/Cristo-Redentor.png',
		location: 'Cristo Redentor'
	},
	{
		name: 'Ilustração do Theatro Municipal do Rio de Janeiro',
		image: 'https://i.ibb.co/93FRR6z/Theatro-Municipal-do-Rio-de-Janeiro.png',
		location: 'Theatro Municipal do Rio de Janeiro'
	}
];

export const CONTRACTS = {
	NFT: '0xb56F1b163ADA5aF0F2293804a7A2f688665205F1',
	TOKEN: '0x84Dbf45fc4151Ac7207e3A72d1177209a032b558'
};

export const MAX_DISTANCE_IN_METERS = 200;

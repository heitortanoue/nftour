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
	},
	{
		location_name: 'Bar da Cachaça',
		location_coordinates: [-22.912365771841785, -43.18340714563299]
	},
	{
		location_name: 'Bar Pavão Azul',
		location_coordinates: [-22.965509284626954, -43.18434957556139]
	},
	{
		location_name: 'Bonde Boca',
		location_coordinates: [-22.9196156086533, -43.189878745008535]
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
	},
	{
		name: 'Mesa do Bonde Boca',
		image: 'https://i.ibb.co/Bwc5ytR/DALL-E-2024-03-24-06-45-21-Create-a-circular-badge-in-a-cartoon-style-with-a-1-2x-zoomed-in-depictio.png',
		location: 'Bonde Boca'
	},
	{
		name: 'Cana do Bar da Cachaça',
		image: 'https://i.ibb.co/0jnfYyZ/DALL-E-2024-03-24-06-40-18-Create-an-image-featuring-a-whimsical-cartoon-style-illustration-of-a-bot.png',
		location: 'Bar da Cachaça'
	},
	{
		name: 'Pavão do Bar Pavão Azul',
		image: 'https://i.ibb.co/z2cvtHM/DALL-E-2024-03-24-06-36-58-A-semi-realistic-illustration-of-a-peacock-blending-elements-of-realism-w.png',
		location: 'Bar Pavão Azul'
	}
];

export const CONTRACTS = {
	NFT: '0xd599d9140189AF03e86FC61Cfa3Dc26Db9B6C647',
	TOKEN: '0xB7e3f2644e6703c8c0B2832265748A05893d5a17'
};

export const MAX_DISTANCE_IN_METERS = 200;

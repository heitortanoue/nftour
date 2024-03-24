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
		location_name: 'Museu do Amanhã',
		location_coordinates: [-22.89462919745466, -43.17957974730101]
	},
	{
		location_name: 'Confeitaria Colombo',
		location_coordinates: [-22.90521787552174, -43.17877795209853]
	},
	{
		location_name: 'Cristo Redentor',
		location_coordinates: [-22.951947126320782, -43.21048630279169]
	},
	{
		location_name: 'Bar Pavão Azul',
		location_coordinates: [-22.967687890780095, -43.18472350010055]
	}
];

export const NFT_MAP = [
	{
		name: 'NFT 1',
		image: 'https://i.ibb.co/HDxYY4J/DALL-E-2024-03-23-01-31-36-Design-a-cartoon-style-badge-featuring-a-character',
		location: 'Batata de Marechal'
	}
];

export const CONTRACTS = {
	NFT: '0xb56F1b163ADA5aF0F2293804a7A2f688665205F1',
	TOKEN: '0x84Dbf45fc4151Ac7207e3A72d1177209a032b558'
};

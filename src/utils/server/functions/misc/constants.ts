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
		name: 'Marechal negro com chapéu de marechal segurando 2 frangos fritos em uma mão e um saco de batata frita na outra mão. Gravata e detalhe no chapéus vermelhos, e roupa branca',
		image: 'https://i.ibb.co/MBNRbVp/Batata-de-Marechal.png',
		location: 'Batata do Marechal'
	},
	{
		name: 'Logo do evento ETHSamba Hack, dividida em 2 linhas, tendo ETH acima e Samba abaixo, com o última letra da palavra Samba substituída pela logo do Ethereum. Além disso, linhas amarelas saem de trás da escrita de forma radial',
		image: 'https://i.ibb.co/wgcqfVT/download.jpg',
		location: 'ETHSamba Hack'
	},
	{
		name: 'Ilustração do Museu de Arte Contemporânea do Rio de Janeiro',
		image: 'https://i.ibb.co/ChVZ29S/Oscar-Niemieyer-psd.png',
		location: 'Museu de Arte Contemporânea do Rio de Janeiro'
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

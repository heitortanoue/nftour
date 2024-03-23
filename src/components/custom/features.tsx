import Icon from '../ui/icon';

const functionalitiesData = [
	{
		icon: 'ticket' as const,
		title: 'Cupons de desconto nos seus comercios favoritos',
		description:
			'Com seus TourCoins você pode trocar por cupons de desconto em seus comercios favoritos.'
	},
	{
		icon: 'images' as const,
		title: 'Album de NFTs',
		description: 'Com a TourCoin você pode colecionar NFTs de cada viagem realizada.'
	},
	{
		icon: 'qr-code' as const,
		title: 'Scan por QRcode',
		description: 'Você pode escanear QRcodes para ganhar TourCoins.'
	},
	{
		icon: 'map' as const,
		title: 'Mapa',
		description:
			'Veja no mapa os pontos turisticos e comercios parceiros que aceitam TourCoins.'
	}
];

export default function Features() {
	return (
		<div className="grid md:grid-cols-2 items-start w-full max-w-6xl mx-auto px-4 py-6 gap-6 md:gap-8">
			{functionalitiesData.map((data, index) => (
				<div key={index} className="flex items-start gap-4">
					<Icon name={data.icon} size={40} />
					<div className="grid gap-1.5">
						<h3 className="text-lg font-semibold tracking-tight">{data.title}</h3>
						<p className="text-sm leading-none text-gray-500 dark:text-gray-400">
							{data.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

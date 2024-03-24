import Frame from '@/components/custom/frame';
import Layout from '@/components/custom/layout';
import { PromotionDB } from '@/utils/types';

const promotions: Omit<PromotionDB, '_createdAt'>[] = [
	{
		_id: '1',
		title: 'Promoção de Natal',
		photo: 'https://i.ibb.co/ChVZ29S/Oscar-Niemieyer-psd.png',
		description: 'Promoção de Natal',
		cost: 10
	},
	{
		_id: '2',
		title: 'Promoção de Ano Novo',
		photo: 'https://i.ibb.co/ChVZ29S/Oscar-Niemieyer-psd.png',
		description: 'Promoção de Ano Novo',
		cost: 20
	},
	{
		_id: '3',
		title: 'Promoção de Carnaval',
		photo: 'https://i.ibb.co/ChVZ29S/Oscar-Niemieyer-psd.png',
		description: 'Promoção de Carnaval',
		cost: 30
	}
];

export default function Coupons() {
	return (
		<Layout>
			<Frame>
				<h1 className="font-pixel text-4xl text-center">Coupons</h1>
				<div className="flex flex-col justify-center p-4 gap-3 max-w-4xl mx-auto">
					{promotions.map((promotion) => (
						<Card promotion={promotion} key={promotion._id} />
					))}
				</div>
			</Frame>
		</Layout>
	);
}

function Card({ promotion }: { promotion: Omit<PromotionDB, '_createdAt'> }) {
	return (
		<div className="flex items-center p-4 gap-3 border rounded-lg bg-white">
			<img src={promotion.photo} alt={promotion.title} className="w-24 h-24 rounded-full" />
			<div className="flex-1">
				<h1 className="text-lg font-bold">{promotion.title}</h1>
				<p className="text-sm">{promotion.description}</p>
				<p className="text-sm">{promotion.cost} TourCoins</p>
			</div>
		</div>
	);
}

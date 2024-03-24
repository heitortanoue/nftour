import Icon from '../ui/icon';

const functionalitiesData = [
	{
		icon: 'ticket-percent' as const,
		title: 'Exclusive Perks',
		description: 'Unlock discounts at top restaurants and cultural hotspots'
	},
	{
		icon: 'file-image' as const,
		title: 'Unique Collectibles',
		description: 'Turn real-life adventures into one-of-a-kind NFT artworks'
	},
	{
		icon: 'store' as const,
		title: 'Enhanced Engagement',
		description: 'Boost customer interaction for local businesses'
	}
];

export default function Features() {
	return (
		<div className="grid md:grid-cols-3 items-start w-full max-w-6xl mx-auto px-4 py-6 gap-6 md:gap-16">
			{functionalitiesData.map((data, index) => (
				<div key={index} className="flex items-start gap-4">
					<Icon name={data.icon} size={70} />
					<div className="grid gap-1.5">
						<h3 className="text-xl font-semibold tracking-tight">{data.title}</h3>
						<p className="text-lg leading-none text-gray-500 dark:text-gray-400">
							{data.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

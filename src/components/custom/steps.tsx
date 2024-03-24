import { Section } from './section';

const stepsData = [
	{
		title: 'Capture Landmarks',
		description: 'Use our digital wallet to scan QR codes at tourist attractions'
	},
	{
		title: 'Collect NFTs',
		description: 'Acquire rare and seasonal NFTs of iconic landmarks'
	},
	{
		title: 'Trade and Explore',
		description: 'Exchange NFTs on our decentralized marketplace and unlock achievements'
	}
];

export default function Steps() {
	return (
		<div className="w-full py-6">
			<div className="container grid max-w-sm gap-4 px-4 md:gap-6 md:max-w-3xl lg:grid-cols-steps lg:px-6 overflow-x-auto">
				{stepsData.map((step, index) => (
					<div key={index} className="flex justify-center items-center space-x-4">
						<div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 w-10 h-10">
							<span className="text-sm font-semibold text-black">{index + 1}</span>
						</div>
						<div className="flex-1 flex-col text-start">
							<h3 className="text-lg font-bold">{step.title}</h3>
							<p className="text-base text-gray-50">{step.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

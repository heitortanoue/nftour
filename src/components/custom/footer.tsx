import Image from 'next/image';
import Icon from '../ui/icon';

const socialMediaData = [
	{
		name: 'facebook' as const,
		url: '#'
	},
	{
		name: 'twitter' as const,
		url: '#'
	},
	{
		name: 'instagram' as const,
		url: '#'
	},
	{
		name: 'linkedin' as const,
		url: '#'
	}
];

const links = [
	{
		title: 'NFTur',
		pages: [
			{
				title: 'About us',
				url: '#about'
			},
			{
				title: 'Pricing',
				url: '/'
			},
			{
				title: 'Privicy Policy',
				url: '/'
			},
			{
				title: 'Terms of Service',
				url: '/'
			}
		]
	},
	{
		title: 'Support',
		pages: [
			{
				title: 'Help Center',
				url: '/'
			}
		]
	}
];

export default function Footer() {
	return (
		<footer className={`w-full text-xs bg-zinc-950 py-20 px-4`}>
			<div
				className="max-w-normal mx-auto text-white text-center items-center lg:items-start lg:text-left
				flex flex-col lg:flex-row gap-10"
			>
				<div
					className="flex flex-col lg:justify-between items-center lg:items-start gap-8 flex-shrink-0 w-1/3
						order-2 lg:order-1"
				>
					<Image
						src={'/logos/text.png'}
						width={695 * 0.25}
						height={100 * 0.25}
						priority
						alt="logo"
					/>
					<div className="text-xxs text-gray-dark">2024 © NFTur - 🇧🇷</div>
				</div>
				<div className="grid md:grid-cols-3 gap-10 flex-1 order-1 lg:order-2">
					{links.map((l) => {
						return (
							<div className="lg:block flex flex-col" key={l.title}>
								{l.title && <FooterTitle title={l.title} />}
								<FooterPages pages={l.pages} />
							</div>
						);
					})}

					<div className="lg:block flex flex-col">
						<FooterTitle title={'Social media'} />
						<div className="flex gap-3 mx-auto">
							{socialMediaData.map((el) => {
								return (
									<a
										href={el.url}
										className="border rounded-md p-2 flex text-white hover:border-primary transition-all"
										key={el.name}
									>
										<Icon name={el.name} size={20} />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterTitle({ title }: { title: string }) {
	return (
		<div className="font-bold mb-5 text-dark-light tracking-widest text-sm">
			{title.toUpperCase()}
		</div>
	);
}

function FooterPages({ pages }: { pages: { title: string; url: string }[] }) {
	return (
		<div className="flex flex-col gap-3">
			{pages.map((el) => {
				return (
					<a
						className="hover:text-primary transition-all"
						target="_blank"
						href={el.url}
						key={el.title}
					>
						{el.title}
					</a>
				);
			})}
		</div>
	);
}

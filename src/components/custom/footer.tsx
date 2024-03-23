import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
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

export default function Footer() {
	return (
		<footer key="1" className="bg-gray-50 dark:bg-gray-950">
			<div className="container flex flex-col min-h-[300px] py-12 gap-4 px-4 text-center md:flex-row md:gap-6 md:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center xl:gap-10">
				<div className="flex flex-col items-center justify-center space-y-2 lg:order-1 lg:space-y-4">
					<Link
						className="flex h-6 items-center justify-center text-2xl font-bold text-gray-900 dark:text-gray-50"
						href="#"
					>
						Nossas redes
						<span className="sr-only">Redes sociais</span>
					</Link>
					<div className="flex items-center space-x-4">
						{socialMediaData.map((socialMedia) => (
							<Link
								key={socialMedia.name}
								className="rounded-full border border-gray-200 bg-white w-8 h-8 flex items-center justify-center shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
								href={socialMedia.url}
							>
								<Icon name={socialMedia.name} size={40} className="w-4 h-4" />
								<span className="sr-only">{socialMedia.name}</span>
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center space-y-2 text-sm tracking-wide md:order-1 md:space-y-4 lg:order-0 lg:text-base">
					<div className="space-y-1">
						<p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
							Questions? Email us at
							<a className="text-gray-900 underline dark:text-gray-50" href="#">
								info@example.com
							</a>
						</p>
						<p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
							Call us at 1-234-567-8901
						</p>
					</div>
					<nav className="flex flex-col gap-1">
						<Link
							className="text-gray-500 transition-colors hover:underline dark:text-gray-400 hover:text-gray-900"
							href="#"
						>
							Terms of Service
						</Link>
						<Link
							className="text-gray-500 transition-colors hover:underline dark:text-gray-400 hover:text-gray-900"
							href="#"
						>
							Privacy Policy
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}

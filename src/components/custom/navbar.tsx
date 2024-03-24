import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const defaultSections = [
	{
		title: 'About',
		href: '#about'
	},
	{
		title: 'Steps',
		href: '#steps'
	},
	{
		title: 'Funcionalities',
		href: '#features'
	},
	{
		title: 'FAQ',
		href: '#faq'
	}
];

const NavBar = ({
	sections = defaultSections
}: {
	sections?: { title: string; href: string }[];
}) => {
	const [openSideBar, setOpenSideBar] = useState(false);

	const SideBar = () => {
		return (
			<aside
				className={`fixed top-0 right-0 z-10 h-screen transition-all flex
            whitespace-nowrap ${openSideBar ? 'w-screen' : 'w-0 delay-300'}`}
			>
				<div
					className={`${
						openSideBar ? 'bg-dark/40' : 'bg-transparent'
					} transition-all  h-full flex-1`}
					onClick={() => setOpenSideBar(false)}
				/>
				<div
					className={`h-full bg-white p-5 shadow-md overflow-hidden
                    transition-all duration-500 ease-in-out ${openSideBar ? 'w-2/3' : 'w-0'}`}
				>
					<div
						onClick={() => setOpenSideBar(false)}
						className="flex justify-end mb-8 cursor-pointer"
					>
						<i className="fa-solid fa-x" aria-hidden />
					</div>
					<nav className={`flex flex-col justify-center items-center gap-3`}>
						{sections &&
							sections.length &&
							sections.map((section) => (
								<Link
									href={section.href}
									key={section.href}
									className="font-semibold"
									onClick={() => setOpenSideBar(false)}
								>
									{section.title}
								</Link>
							))}
					</nav>
				</div>
			</aside>
		);
	};

	return (
		<>
			<SideBar />
			<header className={`p-4`}>
				<div className="flex justify-between items-center gap-x-10">
					<Link href={'/'} className="flex-shrink-0">
						<Image
							alt={'logo'}
							src={'/logos/text.png'}
							width={695 * 0.25}
							height={100 * 0.25}
							priority
						/>
					</Link>

					{/* DESKTOP NAVBAR */}
					<nav className="hidden md:flex gap-6 items-center text-sm">
						<div className="flex items-center gap-5">
							{sections &&
								sections.length &&
								sections.map((section) => (
									<div
										key={section.href}
										className="group flex flex-col items-center p-2"
									>
										<Link href={section.href} className="font-medium">
											{section.title.toUpperCase()}
										</Link>
										<div className="h-0.5 w-0 transition-[width] ease-out group-hover:w-full" />
									</div>
								))}
						</div>
					</nav>

					{/* MOBILE BARS ICON*/}
					<i
						onClick={() => setOpenSideBar((prev) => !prev)}
						className="md:!hidden fa-solid fa-bars text-lg p-1 cursor-pointer"
						aria-hidden
					/>
				</div>
			</header>
		</>
	);
};

export default NavBar;

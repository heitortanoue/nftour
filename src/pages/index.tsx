import About from '@/components/custom/about';
import FAQ from '@/components/custom/faq';
import Features from '@/components/custom/features';
import FloatingIcon from '@/components/custom/floatingIcon';
import Footer from '@/components/custom/footer';
import NavBar from '@/components/custom/navbar';
import { Section } from '@/components/custom/section';
import Steps from '@/components/custom/steps';
import { Button } from '@/components/ui/button';
import { NFT_MAP, ROUTES } from '@/utils/server/functions/misc/constants';
import Link from 'next/link';

export default function Layout() {
	return (
		<>
			<div className="flex flex-col transition-all h-screen">
				<header className="transition-colors bg-white">
					<div className="max-w-normal mx-auto w-full py-2">
						<NavBar />
					</div>
				</header>
				<div className="flex flex-col flex-1 overflow-y-scroll scroll-none bg-dark">
					<div className="flex-1 text-[#111] bg-white rounded-3xl md:rounded-[4rem]">
						<main>
							<Hero />
							<Section id="about">
								<Section.Title>About us</Section.Title>
								<About />
							</Section>
							<Section colors={{ bg: 'black', text: 'white' }} id="steps">
								<Section.Title>How NFTur Works</Section.Title>
								<Steps />
							</Section>
							<Section id="features">
								<Section.Title>Why Choose NFTur?</Section.Title>
								<Features />
							</Section>
							<Section id="faq">
								<Section.Title>Frequently Asked Questions</Section.Title>
								<FAQ />
							</Section>
						</main>
					</div>
					<div className="flex-shrink-0">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

function Hero() {
	const imageLinks = NFT_MAP.map((nft) => nft.image);

	return (
		<>
			<section className="bg-white-dark px-5">
				<div className="max-w-4xl mx-auto pt-8 xl:pt-20 relative">
					<div className="hidden lg:block">
						<FloatingIcon img={imageLinks[0]} position={[-8, 14]} />
						<FloatingIcon img={imageLinks[1]} size={1.3} position={[-3, 20]} />
						<FloatingIcon img={imageLinks[2]} size={0.7} position={[-12, 24]} />
						<FloatingIcon img={imageLinks[3]} position={[-10, 30]} />

						<FloatingIcon img={imageLinks[4]} size={1.4} position={[60, 15]} />
						<FloatingIcon img={imageLinks[5]} position={[54, 23]} />
						<FloatingIcon img={imageLinks[6]} size={0.6} position={[67, 26]} />
						<FloatingIcon img={imageLinks[7]} size={1.1} position={[60, 31]} />
					</div>

					<div className="text-dark">
						<h1
							className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tight !leading-tight text-center
                            animate-enter-from-bottom-first font-pixel"
						>
							Explore the World,{' '}
							<b className="text-primary font-semibold">
								Collect Memories with NFTour!
							</b>
						</h1>
						<p
							className="mt-6 font-light text-base xl:text-lg text-center
                            animate-enter-from-bottom-after"
						>
							<b>Collect NFTs</b> from the places you visit and{' '}
							<b>share your experiences</b> with the world.
						</p>
						<div
							className="w-full mt-8 mx-auto
                        md:w-fit max-w-sm md:max-w-none
                        animate-enter-from-bottom-after"
						>
							<Button className="w-full" size="lg">
								<Link href={ROUTES.APP}>Start exploring now</Link>
							</Button>
							{/* <div
								className="btn text-dark cursor-pointer
                            !text-sm !px-2 !py-3
                            lg:!px-6 lg:!py-3
                            xl:!py-4
                            !border-gray !border hover:bg-gray-100 !font-medium"
								onClick={() => openVideoFunction(true)}
							>
								Ver Vídeo (1min.)
							</div> */}
						</div>
					</div>
				</div>
			</section>{' '}
			<img
				src="/street_map.jpg"
				alt="mapa de cidade"
				className="mx-auto pt-10 md:pt-20 relative w-full object-cover h-48 lg:h-96"
			/>
		</>
	);
}

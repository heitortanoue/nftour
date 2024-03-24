import About from '@/components/custom/about';
import FAQ from '@/components/custom/faq';
import Features from '@/components/custom/features';
import Footer from '@/components/custom/footer';
import NavBar from '@/components/custom/navbar';
import { Section } from '@/components/custom/section';
import Steps from '@/components/custom/steps';
import { Button } from '@/components/ui/button';

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
							<Section id="hero">
								<Section.Title>
									Explore the World, Collect Memories with NFTur!
								</Section.Title>
								<Section.Subtitle>
									Transform your travels into unforgettable experiences.
								</Section.Subtitle>
								<div className="my-4 flex gap-x-4 justify-center">
									<Button>Join NFTur Now</Button>
								</div>
							</Section>
							<Section id="about">
								<Section.Title>About us</Section.Title>
								<About />
							</Section>
							<Section id="steps">
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

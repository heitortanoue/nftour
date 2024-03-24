import FAQ from '@/components/custom/faq';
import Features from '@/components/custom/features';
import Navbar from '@/components/custom/navbar';
import Steps from '@/components/custom/steps';
import { Section } from '@/components/custom/section';
import { Button } from '@/components/ui/button';
import About from '@/components/custom/about';
import Footer from '@/components/custom/footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Section id="hero">
				<Section.Title>Explore the World, Collect Memories with NFTur!</Section.Title>
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
			<Footer />
		</>
	);
}

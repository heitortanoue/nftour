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
				<Section.Title>Ganhe NFTs por viajar!</Section.Title>
				<Section.Subtitle>
					Com a <strong>TourCoin</strong> você ganha NFTs a cada viagem realizada.
				</Section.Subtitle>
				<div className="my-4 flex gap-x-4 justify-center">
					<Button>Cadastre-se como usuario</Button>
					<Button>Cadastre-se como empresa</Button>
				</div>
			</Section>
			<Section id="about">
				<Section.Title>Sobre nos</Section.Title>
				<Section.Subtitle>
					<About />
				</Section.Subtitle>
			</Section>
			<Section id="steps">
				<Section.Title>Como funciona?</Section.Title>
				<Section.Subtitle>
					<Steps />
				</Section.Subtitle>
			</Section>
			<Section id="features">
				<Section.Title>Funcionalidades</Section.Title>
				<Features />
			</Section>
			<Section id="faq">
				<FAQ />
			</Section>
			<Section id="contact">
				<Footer />
			</Section>
		</>
	);
}

import { Section } from './section';

export default function About() {
	return (
		<section className="w-full py-6 px-4">
			<div className="container px-4 space-y-4 md:px-6 lg:space-y-5">
				<div className="space-y-2">
					<h3 className="text-black md:text-xl/relaxed  text-center">
						TourCoin is a cryptocurrency that aims to <b>incentivize local tourism</b>{' '}
						and the economy of small businesses. For every trip you take, you{' '}
						<b>earn NFTs</b> that can be exchanged for discount coupons at partner
						stores.
					</h3>
				</div>
			</div>
		</section>
	);
}

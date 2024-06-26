import Link from 'next/link';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { PlusIcon } from 'lucide-react';

const QandA = [
	{
		question: 'How do I start using NFTour?',
		answer: 'Simply sign up for an account and start exploring with our digital wallet.'
	},
	{
		question: 'Can I trade my NFTs with others?',
		answer: 'Yes, you can trade your NFTs on our decentralized marketplace.'
	},
	{
		question: 'Are there any fees for using NFTour?',
		answer: 'NFTour charges a minimal transaction fee for trading on our platform.'
	},
	{
		question: 'How secure is NFTour?',
		answer: 'NFTour employs state-of-the-art blockchain technology to ensure the security of your NFTs and transactions.'
	}
];

export default function FAQ() {
	return (
		<div key="1" className="py-12 container px-4 space-y-6 md:space-y-8">
			<div className="space-y-2 h-60">
				{QandA.map((qa, index) => (
					<Collapsible
						className="space-y-2 px-4 border border-solid border-gray-200 rounded-lg"
						key={index}
					>
						<CollapsibleTrigger asChild>
							<div className="flex items-center justify-between cursor-pointer h-14">
								<span className="text-lg font-semibold">{qa.question}</span>
								<PlusIcon className="w-4 h-4 fill-current mr-2" />
							</div>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<p className="text-base pb-5 leading-loose md:text-lg/relaxed lg:text-lg/relaxed xl:text-lg/relaxed">
								{qa.answer}
							</p>
						</CollapsibleContent>
					</Collapsible>
				))}
			</div>
		</div>
	);
}

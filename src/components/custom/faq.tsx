import Link from 'next/link';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';
import { PlusIcon } from 'lucide-react';

const QandA = [
	{
		question: 'What is your return policy?',
		answer: 'Lorem ipsum dolor sit amet,'
	},
	{
		question: 'Can I exchange an item?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna nec purus sodales tincidunt. Nulla facilisi. Sed tincidunt, nunc non convallis tempus, libero libero dapibus eros, eget cursus purus nunc nec urna. Sed in odio ac orci fermentum luctus. Sed sed lacus in libero bibendum sollicitudin.'
	},
	{
		question: 'How long does shipping take?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna nec purus sodales tincidunt. Nulla facilisi. Sed tincidunt, nunc non convallis tempus, libero libero dapibus eros, eget cursus purus nunc nec urna. Sed in odio ac orci fermentum luctus. Sed sed lacus in libero bibendum sollicitudin.'
	},
	{
		question: 'What payment methods do you accept?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac urna nec purus sodales tincidunt. Nulla facilisi. Sed tincidunt, nunc non convallis tempus, libero libero dapibus eros, eget cursus purus nunc nec urna. Sed in odio ac orci fermentum luctus. Sed sed lacus in libero bibendum sollicitudin.'
	}
];

export default function FAQ() {
	return (
		<div key="1" className="py-12 md:py-24 lg:py-32 container px-4 space-y-6 md:space-y-8">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">FAQ</h1>
				<p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
					Got a question? We&apos;ve got answers. If you have some other questions, feel
					free to send us an email to
					<Link href="#">hello@example.com</Link>
				</p>
			</div>
			<div className="space-y-2 h-60">
				{QandA.map((qa, index) => (
					<Collapsible
						className="space-y-2 border border-solid border-gray-200 rounded-lg"
						key={index}
					>
						<CollapsibleTrigger asChild>
							<div className="flex items-center justify-between cursor-pointer h-14">
								<span className="text-base font-medium">{qa.question}</span>
								<PlusIcon className="w-4 h-4 fill-current mr-2" />
							</div>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<p className="text-sm leading-loose md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed">
								{qa.answer}
							</p>
						</CollapsibleContent>
					</Collapsible>
				))}
			</div>
		</div>
	);
}

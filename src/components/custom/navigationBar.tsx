import { ToggleGroupItem } from '@radix-ui/react-toggle-group';
import { ToggleGroup } from '../ui/toggle-group';

import { ROUTES } from '../../utils/server/functions/misc/constants';
import Link from 'next/link';

export default function NavigationBar() {
	const buttons1 = [
		{ value: 'map', icon: 'location-dot', link: ROUTES.APP },
		{ value: 'album', icon: 'book-atlas', link: ROUTES.ALBUM }
	];

	const buttons2 = [
		{ value: 'wallet', icon: 'wallet', link: ROUTES.WALLET },
		{ value: 'coupons', icon: 'money-check-dollar', link: ROUTES.COUPONS }
	];

	return (
		<div className="px-5 absolute bottom-0 w-full z-[400] mb-5 transition-colors flex items-center">
			<CustomToogleGroup list={buttons1} />
			<Link
				href={ROUTES.SCAN}
				className="shadow-md border text-3xl w-20 h-20 -mx-5 z-[1] bg-white rounded-full flex cursor-pointer"
			>
				<i className="fa-solid fa-qrcode m-auto" aria-hidden />
			</Link>
			<CustomToogleGroup list={buttons2} />
		</div>
	);
}

function CustomToogleGroup({ list }: { list: { value: string; icon: string; link: string }[] }) {
	return (
		<ToggleGroup
			type="multiple"
			size="sm"
			className="rounded-lg bg-zinc-700 text-white flex-1 h-fit"
		>
			{list.map((button) => (
				<Link href={button.link} className="flex-1" key={button.link}>
					<ToggleGroupItem
						key={button.value}
						value={button.value}
						className="py-3 hover:bg-zinc-600 w-full"
					>
						<i
							className={'text-xl m-auto lg:text-2xl fa-solid fa-' + button.icon}
							aria-hidden
						/>
					</ToggleGroupItem>
				</Link>
			))}
		</ToggleGroup>
	);
}

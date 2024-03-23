import { ToggleGroupItem } from '@radix-ui/react-toggle-group';
import { ToggleGroup } from '../ui/toggle-group';

export default function NavigationBar() {
	const buttons1 = [
		{ value: 'map', icon: 'location-dot' },
		{ value: 'album', icon: 'book-atlas' }
	];

	const buttons2 = [
		{ value: 'wallet', icon: 'wallet' },
		{ value: 'coupons', icon: 'money-check-dollar' }
	];

	return (
		<div className="px-5 absolute bottom-0 w-full z-[400] mb-5 transition-colors flex items-center">
			<CustomToogleGroup list={buttons1} />
			<div className="text-3xl w-20 h-20 -mx-5 z-[1] bg-white rounded-full flex cursor-pointer">
				<i className="fa-solid fa-qrcode m-auto" aria-hidden />
			</div>
			<CustomToogleGroup list={buttons2} />
		</div>
	);
}

function CustomToogleGroup({ list }: { list: { value: string; icon: string }[] }) {
	return (
		<ToggleGroup
			type="multiple"
			size="sm"
			className="rounded-lg bg-zinc-700 text-white flex-1 h-fit"
		>
			{list.map((button) => (
				<ToggleGroupItem
					key={button.value}
					value={button.value}
					className="flex-1 py-3 hover:bg-zinc-600"
				>
					<i className={'text-xl lg:text-2xl fa-solid fa-' + button.icon} aria-hidden />
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	);
}

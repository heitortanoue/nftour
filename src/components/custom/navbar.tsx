import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const navMenuItems = [
	{ label: 'Sobre', href: '#about' },
	{ label: 'Funcionalidades', href: '#features' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Cadastre-se', href: '#' },
	{ label: 'Login', href: '/app' }
];

export default function Navbar() {
	return (
		<>
			<div className="sm:hidden flex justify-end p-4 sticky top-0 bg-slate-50">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="shrink-0 md:hidden">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>TravelCoin</SheetTitle>
						</SheetHeader>
						<div className="mt-8 flex flex-col items-center gap-y-4">
							{navMenuItems.map((item, index) => (
								<Link key={index} href={item.href} legacyBehavior passHref>
									{item.label}
								</Link>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
			<div className="hidden sm:flex sm:justify-between sm:items-center p-4 sticky top-0 bg-slate-50">
				<Image
					src="https://github.com/guijun13.png"
					height={60}
					width={60}
					alt="TravelCoin"
				/>
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							{navMenuItems.map((item, index) => (
								<NavigationMenuItem key={index}>
									<Link href={item.href} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{item.label}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</>
	);
}

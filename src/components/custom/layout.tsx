import NavigationBar from './navigationBar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col h-screen relative overflow-hidden bg-stone-100">
			<nav></nav>
			<main className="flex-1 flex flex-col">
				{children}
				<NavigationBar />
			</main>
		</div>
	);
}

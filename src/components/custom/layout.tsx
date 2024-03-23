import NavigationBar from './navigationBar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
		<div className="flex flex-col h-screen relative overflow-hidden">
			<nav></nav>
			<main className="flex-1">
                {children}
				<NavigationBar />
			</main>
		</div>
	);
}

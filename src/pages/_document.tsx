import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="pt-BR" suppressHydrationWarning>
			<Head>
				<link rel="apple-touch-icon" href="/logos/main.png" />
				<link rel="icon" href="/logos/main.png" sizes="any" />
				<meta name="theme-color" content="#000000" />

				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<body className="min-h-screen bg-background font-sans antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

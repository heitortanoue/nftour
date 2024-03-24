import '@/styles/globals.css';

import nProgress from 'nprogress';
import Script from 'next/script';
import Head from 'next/head';
import Router from 'next/router';
import { Toaster } from '@/components/ui/toaster';

import { Pixelify_Sans } from 'next/font/google';

import type { AppProps } from 'next/app';
import Web3ContextProvider from '@/utils/app/contexts/web3Context';

nProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
	nProgress.start();
});
Router.events.on('routeChangeComplete', () => {
	nProgress.done();
});
Router.events.on('routeChangeError', () => {
	nProgress.done();
});

const font_pixel = Pixelify_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin-ext'],
	variable: '--font-pixel'
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>NFTour - Explore the World, Collect memories</title>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, minimum-scale=1"
				/>
			</Head>

			<Script
				src="https://kit.fontawesome.com/cd41aedce8.js"
				crossOrigin="anonymous"
				strategy="beforeInteractive"
			/>

			<div className={`${font_pixel.variable} font-sans`}>
				<Contexts>
					<Component {...pageProps} />
					<Toaster />
				</Contexts>
			</div>
		</>
	);
}

function Contexts({ children }: { children: React.ReactNode }) {
	return <Web3ContextProvider>{children}</Web3ContextProvider>;
}

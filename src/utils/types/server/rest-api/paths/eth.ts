export type Web3Endpoints = {
	'/eth/token': {
		POST: (params: { to: string; nft_url: string }) => Promise<void>;
	};
};

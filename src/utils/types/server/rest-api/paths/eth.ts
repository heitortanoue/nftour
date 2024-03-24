export type Web3Endpoints = {
	'/eth/token': {
		POST: (params: { to: string; nft_url: string }) => Promise<void>;
    };

    '/eth/trade-coupon': {
        POST: (params: { promo_id: string, wallet: string }) => Promise<void>;
    }
};

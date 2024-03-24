export type Web3Endpoints = {
	'/eth/token': {
		POST: (params: { ammount: number; to: string }) => Promise<void>;
	};
};

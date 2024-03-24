import { CONTRACTS } from '@/utils/server/functions/misc/constants';
import { APIHandler, HTTPError } from '@/utils/server/handler';
import { ethers } from 'ethers';
import { NextApiRequest } from 'next';

import TokenABI from '../../../../contracts/abis/Token.json';

export default APIHandler(
	{},
	{
		POST: tradeCoupon
	}
);

async function tradeCoupon(req: NextApiRequest) {
	const { promo_id, wallet } = req.body;

	const RPCUrl = 'https://sepolia-rpc.scroll.io/';
	const provider = new ethers.JsonRpcProvider(RPCUrl);
	const walletWithProvider = new ethers.Wallet(
		process.env.WALLET_PRIVATE_KEY as string,
		provider
	);
	if (!walletWithProvider) {
		return HTTPError.internalServerError('Wallet not found');
	}

	const tokenContract = new ethers.Contract(CONTRACTS.TOKEN, TokenABI, walletWithProvider);

	console.log('trading coupon', promo_id, wallet);
    // function burn(address from, uint256 amount) public
    console.log(await tokenContract.burn(wallet, promo_id));
}

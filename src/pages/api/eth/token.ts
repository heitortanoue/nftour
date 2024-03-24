import { APIHandler, HTTPError } from '@/utils/server/handler';
import { ethers } from 'ethers';
import { NextApiRequest } from 'next';

import ABI from '../../../../contracts/abis/Token.json';
import { CONTRACTS } from '@/utils/server/functions/misc/constants';

export default APIHandler(
	{},
	{
		POST: mintToken
	}
);

async function mintToken(req: NextApiRequest) {
	const { ammount, to } = req.body;

	const RPCUrl = 'https://sepolia-rpc.scroll.io/';
	const provider = new ethers.JsonRpcProvider(RPCUrl);
	const walletWithProvider = new ethers.Wallet(
		process.env.WALLET_PRIVATE_KEY as string,
		provider
	);
	if (!walletWithProvider) {
		return HTTPError.internalServerError('Wallet not found');
	}

	const contract = new ethers.Contract(CONTRACTS.TOKEN, ABI, walletWithProvider);
	if (!contract) {
		return HTTPError.internalServerError('Contract not found');
	}

	const real_amount = ammount;

	// function mint(uint amount) onlyOwner public
	console.log('minting', real_amount);
	console.log(await contract.mint(real_amount));

	// function transferCoin(address to, uint256 tokenId) public
	console.log('transfering', to, real_amount);
	console.log(await contract.transferCoin(to, real_amount));
}

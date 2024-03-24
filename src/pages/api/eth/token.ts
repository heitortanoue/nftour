import { APIHandler, HTTPError } from '@/utils/server/handler';
import { ethers } from 'ethers';
import { NextApiRequest } from 'next';

import TokenABI from '../../../../contracts/abis/Token.json';
import NFTABI from '../../../../contracts/abis/NFT.json';
import { CONTRACTS } from '@/utils/server/functions/misc/constants';

export default APIHandler(
	{},
	{
		POST: mintToken
	}
);

async function mintToken(req: NextApiRequest) {
	const { to, nft_url } = req.body;
	const TOKEN_AMMOUNT = 10;

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
	const NFCContract = new ethers.Contract(CONTRACTS.NFT, NFTABI, walletWithProvider);
	if (!tokenContract || !NFCContract) {
		return HTTPError.internalServerError('Contract not found');
	}

	const real_amount = TOKEN_AMMOUNT;

	// NFT PART -=-=-=-=-=-=-==-=-=--

	// function mint(string memory _tokenURI, address to) external returns(uint)
	console.log('minting NFT', nft_url, to);
	console.log(await NFCContract.mint(nft_url, to));

	// TOKEN PART -=-=-=-=-=-=-==-=-=--

	// function mint(uint amount) onlyOwner public
	console.log('minting tokens', real_amount);
	console.log(await tokenContract.mint(real_amount));

	// function transferCoin(address to, uint256 tokenId) public
	console.log('transfering tokens', to, real_amount);
	console.log(await tokenContract.transferCoin(to, real_amount));
}

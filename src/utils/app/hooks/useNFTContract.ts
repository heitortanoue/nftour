import { Contract } from 'ethers';
import { useMemo } from 'react';
import { IWeb3Context, useWeb3Context } from '../contexts/web3Context';
import ABI from '../../../../contracts/abis/NFT.json';
import { CONTRACTS } from '@/utils/server/functions/misc/constants';


const useNFTContract = () => {
	const { state } = useWeb3Context() as IWeb3Context;

	const contract = useMemo(
		() => state.signer && new Contract(CONTRACTS.NFT, ABI, state.signer),
		[state.signer]
	);

	// mint(uint256 tokenId, address to)
	const mint = async (NFTUrl: string, to: string) => {
		if (!contract) return;
		return contract.mint(NFTUrl, to);
	};

    // getUserNFTs(address a) public view returns(uint[] memory)
    const getUserNFTs = async (address: string) => {
        if (!contract) return;
        const res = contract.getUserNFTs(address);
        console.log('getUserNFTs', res);
        return res;
    }

	return { mint, getUserNFTs };
};

export default useNFTContract;

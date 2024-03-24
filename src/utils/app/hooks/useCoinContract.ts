import { Contract } from 'ethers';
import { useMemo } from 'react';
import { IWeb3Context, useWeb3Context } from '../contexts/web3Context';
import ABI from '../../../../contracts/abis/Token.json';
import { CONTRACTS } from '@/utils/server/functions/misc/constants';

const useCoinContract = () => {
	const { state } = useWeb3Context() as IWeb3Context;

	const contract = useMemo(
		() => state.signer && new Contract(CONTRACTS.TOKEN, ABI, state.signer),
		[state.signer]
	);

	// balanceOf(address account) public view returns (uint256)
	const balanceOf = async () => {
		if (!contract) return;
		return contract.balanceOf(state.signer);
	};

	return { balanceOf };
};

export default useCoinContract;

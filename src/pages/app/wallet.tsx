import Frame from '@/components/custom/frame';
import Layout from '@/components/custom/layout';
import useCoinContract from '@/utils/app/hooks/useCoinContract';
import useWeb3Provider from '@/utils/app/hooks/useWeb3';
import { useEffect, useState } from 'react';

export default function Wallet() {
	const { balanceOf } = useCoinContract();
	const { state } = useWeb3Provider();
	const [balance, setBalance] = useState(0);

	async function getBalance() {
		const balance = await balanceOf();
		if (!balance) return;
		setBalance(balance);
	}

	useEffect(() => {
		getBalance();
	}, [state.address, state.isAuthenticated]);

	return (
		<Layout>
			<Frame>
				<h1 className="font-pixel text-4xl text-center mb-5">Wallet</h1>
				<div className="flex gap-5 items-center p-5 rounded-lg border bg-white w-fit m-auto">
					<i className="fa-solid fa-wallet text-4xl" aria-hidden />
					<div>
						<div className="font-semibold">TRC</div>
						<div className="text-xs text-gray-400 -mt-1">TourCoins</div>

						<div className="mt-1 text-2xl">$ {balance.toString()}</div>
					</div>
				</div>
			</Frame>
		</Layout>
	);
}

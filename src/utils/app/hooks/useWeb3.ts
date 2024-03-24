import { BrowserProvider, ethers, JsonRpcSigner } from 'ethers';
import { useToast } from '@/components/ui/use-toast';
import { useCallback, useEffect, useState } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
	interface Window {
		ethereum?: MetaMaskInpageProvider;
	}
}


export interface IWeb3State {
	address: string | null;
	currentChain: number | null;
	signer: JsonRpcSigner | null;
	provider: BrowserProvider | null;
	isAuthenticated: boolean;
}

const useWeb3Provider = () => {
	const initialWeb3State = {
		address: null,
		currentChain: null,
		signer: null,
		provider: null,
		isAuthenticated: false
	};

	const { toast } = useToast();
    const [state, setState] = useState<IWeb3State>(initialWeb3State);
    const [loading, setLoading] = useState(true);

	const connectWallet = useCallback(async () => {
		if (state.isAuthenticated) return;

		try {
			const { ethereum } = window;

            if (!ethereum) {
                setLoading(false);
				return toast({
					variant: 'destructive',
					title: 'No ethereum wallet found',
					description: 'Please install metamask or use a dapp browser'
				});
			}
			const provider = new ethers.BrowserProvider(ethereum);

			const accounts: string[] = await provider.send('eth_requestAccounts', []);

			if (accounts.length > 0) {
				const signer = await provider.getSigner();
				const chain = Number(await (await provider.getNetwork()).chainId);

				setState({
					...state,
					address: accounts[0],
					signer,
					currentChain: chain,
					provider,
					isAuthenticated: true
				});

				localStorage.setItem('isAuthenticated', 'true');
            }

            setLoading(false);
		} catch {}
	}, [state, toast]);

	const disconnect = () => {
		setState(initialWeb3State);
		localStorage.removeItem('isAuthenticated');
	};

	useEffect(() => {
		if (window == null) return;

		if (localStorage.hasOwnProperty('isAuthenticated')) {
			connectWallet();
		}
	}, [connectWallet, state.isAuthenticated]);

	useEffect(() => {
		if (typeof window.ethereum === 'undefined') return;

		window.ethereum.on('accountsChanged', (accounts: any) => {
            const typedAccounts = accounts as string[];
			setState({ ...state, address: typedAccounts[0] });
		});

        window.ethereum.on('chainChanged', (network: any) => {
            const typedNetwork = network as string;
			setState({ ...state, currentChain: Number(typedNetwork) });
		});

		return () => {
			window.ethereum && window.ethereum.removeAllListeners();
		};
	}, [state]);

	return {
        connectWallet,
        loading,
		disconnect,
		state
	};
};

export default useWeb3Provider;

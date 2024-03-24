import { createContext, FC, ReactNode, useContext, useEffect } from 'react';
import useWeb3Provider, { IWeb3State } from '../hooks/useWeb3';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/router';

export interface IWeb3Context {
	connectWallet: () => Promise<ReturnType<typeof toast> | undefined>;
	disconnect: () => void;
	state: IWeb3State;
}

const Web3Context = createContext<IWeb3Context | null>(null);

type Props = {
	children: ReactNode;
};

const Web3ContextProvider: FC<Props> = ({ children }) => {
	const { connectWallet, disconnect, state } = useWeb3Provider();
	const router = useRouter();

	const tryToConnectOnLinks = ['/app/wallet', '/app/album'];

	useEffect(() => {
        if (tryToConnectOnLinks.includes(router.pathname)) {
            try {
                connectWallet();
            } catch (error) {
                console.error(error);
            }
		}
	}, []);

	return (
		<Web3Context.Provider
			value={{
				connectWallet,
				disconnect,
				state
			}}
		>
			{children}
		</Web3Context.Provider>
	);
};

export default Web3ContextProvider;

export const useWeb3Context = () => useContext(Web3Context);

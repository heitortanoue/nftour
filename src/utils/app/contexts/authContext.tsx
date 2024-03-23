import { createContext, useState } from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';

import { useEndpointRequest } from '../hooks/useEndpoint';

interface AuthContextData {
	user: string | null;
	isAuthenticated: boolean;
	signIn: ({ email }: { email: string }) => Promise<{
		error?: string;
		message?: string;
	}>;
	signOut: () => Promise<void>;
	loading: boolean;
}

export const AuthContext = createContext<Partial<AuthContextData>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();

	const { 'NFTour.accessToken': accessToken } = parseCookies();
	const [user, setUser] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const isAuthenticated = !!user;

	// const shouldReloadUser = !!accessToken && !isAuthenticated;
	// const { data: recoverUserData, isLoading: recoveringUser } = useEndpointSWR(
	// 	'/auth/recover-user',
	// 	undefined,
	// 	{
	// 		condition: shouldReloadUser
	// 	}
	// );

	// if (recoverUserData) {
	// 	setUser(recoverUserData);
	// 	setLoading(false);
	// }

	// useEffect(() => {
	// 	if (!shouldReloadUser && !recoveringUser) {
	// 		setLoading(false);
	// 	}
	// }, [shouldReloadUser, recoveringUser]);

	const signIn = async ({ email }: { email: string }) => {
		setLoading(true);
		const response: { error?: string; message?: string } = {};

		const loginResponse = await useEndpointRequest('/auth/login', 'POST', {
			email
		});

		const { success } = loginResponse;
		if (success !== true) {
			setLoading(false);

			response.error = loginResponse.error?.message ?? 'Erro desconhecido';
			return response;
		}

		setUser(loginResponse.data);
		response.message = 'Login efetuado com sucesso!';

		return response;
	};

	const signOut = async () => {
		await useEndpointRequest('/auth/sign-out', undefined);
		setUser(null);
		router.push('/');

		return;
	};

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				user,
				isAuthenticated,
				loading
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

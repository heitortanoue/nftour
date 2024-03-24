import type { AuthLoginParams } from '../params/AuthLoginParams';
import type { AuthSignUpParams } from '../params/AuthSignUpParams';

export type AuthEndpoints = {
	// Login
	'/auth/sendOTP': {
		POST: (params: AuthLoginParams) => void;
	};

	// Sign up
	'/auth/verifyOTP': {
		POST: (params: AuthSignUpParams) => void;
	};
};

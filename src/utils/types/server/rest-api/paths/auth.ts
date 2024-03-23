import { infoUsuario } from '@/utils/types';
import type { AuthLoginParams } from '../params/AuthLoginParams';
import type { AuthSignUpParams } from '../params/AuthSignUpParams';

export type AuthEndpoints = {
    // Login
    '/auth/login': {
        POST: (params: AuthLoginParams) => void;
    };

    // Sign up
    '/auth/sign-up': {
        POST: (params: AuthSignUpParams) => void;
    };

    // Sign out
    '/auth/sign-out': {
        GET: (params: undefined) => void;
    };

    // Refresh the access token using the refresh token
    '/auth/refresh-token': {
        GET: (params: undefined) => void;
    };

    // Recover user info from token
    '/auth/recover-user': {
        GET: (params: undefined) => infoUsuario;
    };
};

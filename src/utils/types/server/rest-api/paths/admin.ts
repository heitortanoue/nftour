import type { UsuarioComAssinatura } from '@typing';

export type AdminEndpoints = {
    // Login
    '/admin/user/search': {
        GET: (params: { search: string }) => UsuarioComAssinatura[];
    };

    // Membership
    '/admin/user/membership': {
        POST: (params: { planId: string; userId: string }) => void;
        DELETE: (params: { membershipId: string }) => void;
    };

    '/admin/push/send': {
        POST: (params: { title: string; message: string }) => string;
    };
};

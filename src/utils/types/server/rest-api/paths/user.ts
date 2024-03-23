import { UsuarioComAssinatura, infoBasicasUsuario } from '@typing';

export type UserEndpoints = {
    '/user/change-photo': {
        POST: (params: unknown) => void;
    };

    '/user': {
        GET: (params: void | { id: string }) => UsuarioComAssinatura;
        // TODO: Fix this type
        // | ((params: { id: string }) => Pick<infoBasicasUsuario, '_id' | 'info' | '_createdAt'>);
        DELETE: () => void;
    };

    '/user/hide-tutorial': {
        GET: () => void;
    };

    '/user/set-learning-speed': {
        POST: (params: { speed: number }) => void;
    };
};

import { AuthEndpoints } from './paths/auth';
import { PaymentEndpoints } from './paths/payment';
import { UserProgressEndpoints } from './paths/user-progress';
import { UserEndpoints } from './paths/user';
import { BlogEndpoints } from './paths/blog';
import { AdminEndpoints } from './paths/admin';
import { PushEndpoints } from './paths/push';

export interface Endpoints
    extends AuthEndpoints,
        UserProgressEndpoints,
        UserEndpoints,
        PaymentEndpoints,
        AdminEndpoints,
        PushEndpoints,
        BlogEndpoints {}

export const API_PREFIX = '/api';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type EMethodOf<T extends keyof Endpoints> = keyof Endpoints[T] & Method;
export type EParamType<
    T extends keyof Endpoints,
    M extends EMethodOf<T>
> = Endpoints[T][M] extends (params: infer P) => any ? P : never;
export type EReturnType<
    T extends keyof Endpoints,
    M extends EMethodOf<T>
> = Endpoints[T][M] extends (...args: any[]) => infer R ? R : never;

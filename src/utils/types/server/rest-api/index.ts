import { Web3Endpoints } from './paths/eth';

export interface Endpoints
    extends Web3Endpoints {}

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

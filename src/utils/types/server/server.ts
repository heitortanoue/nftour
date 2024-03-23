import { ValidateFunction } from 'ajv';
import { NextApiRequest, NextApiResponse } from 'next';

export type APIHttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type APISuccessResponse<T> = {
    success: true;
    data?: T;
};

export type APIErrorType =
    | 'missing-fields'
    | 'invalid-fields'
    | 'not-found'
    | 'method-not-allowed'
    | 'internal-server-error'
    | 'unauthorized'
    | 'bad-request'
    | 'conflict'
    | 'unknown';

export type APIErrorResponse = {
    success: false;
    error: {
        type: APIErrorType;
        message?: string;
    };
};

export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;

export type APIOptions = {
    authRequired?: boolean;
    adminRequired?: boolean;
    validateParams?: ValidateFunction;
    doNotRetryOnUnauthorized?: boolean;
};

type APIHandlerFunction<O> = (
    req: NextApiRequest,
    res: NextApiResponse<APIResponse<O>>
) => Promise<O | void>;

export type APIMethodHandler<O> = {
    [key in APIHttpMethod]?: APIHandlerFunction<O>;
};

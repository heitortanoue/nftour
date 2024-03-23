import { APIErrorType } from '../../types/server/server';

export class HTTPError extends Error {
    constructor(
        public status: number,
        public type: APIErrorType,
        message?: string
    ) {
        super(message ?? type);
    }

    static internalServerError(message?: string) {
        return new HTTPError(500, 'internal-server-error', message);
    }

    static methodNotAllowed(message?: string) {
        return new HTTPError(405, 'method-not-allowed', message);
    }

    static notFound(message?: string) {
        return new HTTPError(404, 'not-found', message);
    }

    static badRequest(message?: string) {
        return new HTTPError(400, 'bad-request', message);
    }

    static unauthorized(message?: string) {
        return new HTTPError(401, 'unauthorized', message);
    }

    static conflict(message?: string) {
        return new HTTPError(409, 'conflict', message);
    }
}

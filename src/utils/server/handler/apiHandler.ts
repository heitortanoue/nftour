import nookies from 'nookies';

import { HTTPError } from './httpError';
import errorCatcher from './errorCatcher';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { APIMethodHandler, APIOptions } from '../../types/server/server';

export function APIHandler<O>(options: APIOptions, handler: APIMethodHandler<O>) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const method = req.method
				? (req.method.toUpperCase() as keyof APIMethodHandler<O>)
				: undefined;
			if (!method || !handler[method]) {
				throw HTTPError.methodNotAllowed(`Method ${method} not allowed`);
			}

			const methodHandler = handler[method];
			if (!methodHandler) {
				throw HTTPError.methodNotAllowed(`Method ${method} not allowed`);
			}

			// const { 'myApp.accessToken': accessToken, 'myApp.refreshToken': refreshToken } =
			// 	nookies.get({
			// 		req
			// 	});
			// const userInfo = accessToken
			//     ? getUserFromAccessToken(accessToken)
			//     : undefined;

			// if (options?.authRequired) {
			//     if (!refreshToken) {
			//         throw HTTPError.unauthorized(
			//             'You must be logged in to access this resource'
			//         );
			//     }

			//     const invalidAccessToken =
			//         !userInfo || userInfo._tokenExpiresAt < new Date();
			//     if (invalidAccessToken) {
			//         if (options.doNotRetryOnUnauthorized) {
			//             throw HTTPError.unauthorized(
			//                 'You must be logged in to access this resource'
			//             );
			//         }

			//         const newAccessToken = await getNewAccessToken({ refreshToken, req });
			//         setAuthAccessTokenCookie({ res, accessToken: newAccessToken });
			//         req.cookies['myApp.accessToken'] = newAccessToken;

			//         if (!newAccessToken) {
			//             throw HTTPError.unauthorized(
			//                 'You must be logged in to access this resource'
			//             );
			//         }
			//     }
			// }

			// // Check if user is admin
			// if (
			//     options.adminRequired &&
			//     (!userInfo || !userInfo.permissions.admin)
			// ) {
			//     throw HTTPError.unauthorized(
			//         'You must be an admin to access this resource'
			//     );
			// }

			// Validate params
			if (options.validateParams) {
				// if POST or PUT, validate body
				// if GET or DELETE, validate query
				const data = method === 'GET' || method === 'DELETE' ? req.query : req.body;

				const valid = options.validateParams(data);
				if (!valid) {
					const errorsString =
						(options.validateParams.errors ?? [])
							.map((el) => `${el.instancePath}: ${el.keyword} - ${el.message}`)
							.join(', ') || '';

					console.error('Invalid data in endpoint ' + req.url);
					console.error(data);
					console.error(options.validateParams.errors);

					throw HTTPError.badRequest('Invalid params: ' + errorsString);
				}
			}

			const result = await methodHandler(req, res);
			return res.status(200).json({
				success: true,
				...(result !== undefined && { data: result })
			});
		} catch (err: any) {
			return errorCatcher(err, req, res);
		}
	};
}

import { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'ajv';

import { HTTPError } from './httpError';
import { APIErrorResponse } from '../../types/server/server';
import { AxiosError } from 'axios';

export default function errorCatcher(
    err: Error,
    req: NextApiRequest,
    res: NextApiResponse<APIErrorResponse>
) {
    console.error('Error caught in API handler: ' + req.url + ' - ' + err.name);

    if (err instanceof AxiosError) {
        getUsefulInfoFromAxiosError(err);
    } else {
        console.error(err);
    }

    if (err instanceof HTTPError) {
        return res.status(err.status).json({
            success: false,
            error: {
                type: err.type,
                ...(err.message ? { message: err.message } : {})
            }
        });
    }

    if (err instanceof ValidationError) {
        return res.status(400).json({
            success: false,
            error: {
                type: 'invalid-fields',
                message: err.errors.join(', ')
            }
        });
    }

    return res.status(500).json({
        success: false,
        error: {
            type: 'internal-server-error',
            message: 'Internal Server Error, please try again later.'
        }
    });
}

function getUsefulInfoFromAxiosError(err: AxiosError): void {
    console.error('Axios request failed.');

    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`Status: ${err.response.status}`);
        console.error(`URL: ${err.response.config.url}`);
        console.error(`Method: ${err.response.config.method.toUpperCase()}`);
        console.error(`Sent data:`);
        console.error(JSON.parse(err.response.config.data));
        console.error(`Returned data:`);
        console.error(err.response.data);
    } else if (err.request) {
        // The request was made but no response was received
        console.error('Request was made but no response was received');
        console.error(`URL: ${err.request.url}`);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error(`Error Message: ${err.message}`);
    }
}

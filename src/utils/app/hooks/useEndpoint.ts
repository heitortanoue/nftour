import useSWR from 'swr';
import axios, { AxiosError } from 'axios';

import type { Endpoints, EMethodOf, EParamType, EReturnType } from '../../types/server/rest-api';
import { APIResponse, APIErrorResponse } from '../../types';

const API_URL = '/api/';
const buildURLWithQueries = <E extends keyof Endpoints, M extends EMethodOf<E>>() => {
	return (endpoint: E, method: M, payload?: EParamType<E, M>) => {
		const url = `${API_URL}${endpoint}`;

		if (method === 'GET') {
			const queriesString = payload
				? new URLSearchParams(payload as Record<string, string>).toString()
				: '';
			return `${url}${queriesString ? `?${queriesString}` : ''}`;
		}

		return url;
	};
};
const buildBody = <E extends keyof Endpoints, M extends EMethodOf<E>>() => {
	return (method: M, payload?: EParamType<E, M>) => {
		if (method === 'GET') {
			return undefined;
		}

		return payload;
	};
};

export async function useEndpointRequest<E extends keyof Endpoints, M extends EMethodOf<E>>(
	endpoint: E,
	method: M,
	payload?: EParamType<E, M>
): Promise<APIResponse<EReturnType<E, M>>> {
	const urlWithQueries = buildURLWithQueries<E, M>()(endpoint, method, payload);
	const body = buildBody<E, M>()(method, payload);

	try {
		const response = await axios<APIResponse<EReturnType<E, M>>>({
			method,
			url: urlWithQueries,
			data: body
		}).then((res) => res.data);

		return response;
	} catch (error: any) {
		console.error(error);
		const finalResponse: APIResponse<EReturnType<E, M>> = {
			success: false,
			error: {
				type: 'unknown'
			}
		};

		if (error instanceof AxiosError) {
			const { response } = error as AxiosError<APIErrorResponse>;
			if (response) {
				const { data } = response;
				finalResponse.error = data.error;
				return finalResponse;
			}
		}

		return finalResponse;
	}
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Type for endpoints with only GET method
type EndpointsWithGet = {
	[K in keyof Endpoints]: 'GET' extends keyof Endpoints[K] ? K : never;
}[keyof Endpoints];

// Helper types for GET method
type EGetParamType<T extends EndpointsWithGet> = Endpoints[T]['GET'] extends (
	params: infer P
) => any
	? P
	: never;
type EGetReturnType<T extends EndpointsWithGet> = Endpoints[T]['GET'] extends (
	...args: any[]
) => infer R
	? R
	: never;

export function useEndpointSWR<E extends EndpointsWithGet>(
	endpoint: E,
	queries?: EGetParamType<E>,
	options?: {
		initialData?: EGetReturnType<E>;
		condition?: boolean;
	}
): {
	data?: EGetReturnType<E>;
	error?: APIErrorResponse['error'];
	isLoading: boolean;
	isValidating: boolean;
} {
	const urlWithQueries = buildURLWithQueries<E, 'GET'>()(endpoint, 'GET', queries);

	const {
		data: dataFromEndpoint,
		error: errorFromAxios,
		isLoading,
		isValidating
	} = useSWR<APIResponse<EGetReturnType<E>>, AxiosError<APIErrorResponse['error']>>(
		!(options && 'condition' in options && options.condition !== true) ? urlWithQueries : null,
		fetcher
	);

	if (dataFromEndpoint && dataFromEndpoint?.success === true) {
		const { data } = dataFromEndpoint;
		return { data, isLoading, isValidating };
	}

	const error = errorFromAxios?.response?.data;
	return { error, isLoading, isValidating };
}

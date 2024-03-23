import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AuthLoginParams = {
    email: string;
};

const AuthLoginParamsSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' },
    },
    required: ['email'],
    additionalProperties: false
};

export const validateAuthLoginParams = ajv.compile<AuthLoginParams>(
    AuthLoginParamsSchema
);

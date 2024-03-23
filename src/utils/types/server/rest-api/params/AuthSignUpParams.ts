import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AuthSignUpParams = {
    email: string;
};

const AuthSignUpParamsSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' },
    },
    required: ['email'],
    additionalProperties: false
};

export const validateAuthSignUpParams = ajv.compile<AuthSignUpParams>(
    AuthSignUpParamsSchema
);

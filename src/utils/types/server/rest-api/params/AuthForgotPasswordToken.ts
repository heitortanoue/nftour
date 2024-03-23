import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AuthForgotPasswordTokenParams = {
    email: string;
};

const AuthForgotPasswordTokenParamsSchema = {
    type: 'object',
    properties: {
        email: {
            type: 'string'
        }
    },
    required: ['email'],
    additionalProperties: false
};

export const validateAuthForgotPasswordTokenParams = ajv.compile<AuthForgotPasswordTokenParams>(
    AuthForgotPasswordTokenParamsSchema
);

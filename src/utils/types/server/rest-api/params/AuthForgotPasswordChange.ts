import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AuthForgotPasswordChangeParams = {
    token: string;
    password: string;
};

const AuthForgotPasswordChangeParamsSchema = {
    type: 'object',
    properties: {
        token: {
            type: 'string'
        },
        password: {
            type: 'string'
        }
    },
    required: ['token', 'password'],
    additionalProperties: false
};

export const validateAuthForgotPasswordChangeParams = ajv.compile<AuthForgotPasswordChangeParams>(
    AuthForgotPasswordChangeParamsSchema
);

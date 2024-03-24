import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AuthSignUpParams = {
    email: string;
    otp: string;
};

const AuthSignUpParamsSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        otp: { type: 'string' }
    },
    required: ['email', 'otp'],
    additionalProperties: false
};

export const validateAuthSignUpParams = ajv.compile<AuthSignUpParams>(
    AuthSignUpParamsSchema
);

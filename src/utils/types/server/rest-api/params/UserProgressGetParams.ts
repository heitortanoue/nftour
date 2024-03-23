import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type UserProgressGetParams = {
    deckId: string;
};

const UserProgressGetParamsSchema = {
    type: 'object',
    properties: {
        deckId: {
            type: 'string'
        }
    },
    required: ['deckId'],
    additionalProperties: false
};

export const validateUserProgressGetParams = ajv.compile<UserProgressGetParams>(
    UserProgressGetParamsSchema
);

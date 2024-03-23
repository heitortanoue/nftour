import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AdminPushSendParams = {
    title: string;
    message: string;
};

const AdminPushSendParamsSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            minLength: 1
        },
        message: {
            type: 'string',
            minLength: 1
        }
    },
    required: ['title', 'message'],
    additionalProperties: false
};

export const validateAdminPushSendParams =
    ajv.compile<AdminPushSendParams>(AdminPushSendParamsSchema);

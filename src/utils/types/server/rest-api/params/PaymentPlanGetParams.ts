import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type PaymentPlanGetParams = {
    code: string;
};

const PaymentPlanGetParamsSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        }
    },
    required: ['id'],
    additionalProperties: false
};

export const validatePaymentPlanGetParams = ajv.compile<PaymentPlanGetParams>(
    PaymentPlanGetParamsSchema
);

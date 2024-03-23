import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type PaymentCouponGetParams = {
    code: string;
};

const PaymentCouponGetParamsSchema = {
    type: 'object',
    properties: {
        code: {
            type: 'string'
        }
    },
    required: ['code'],
    additionalProperties: false
};

export const validatePaymentCouponGetParams = ajv.compile<PaymentCouponGetParams>(
    PaymentCouponGetParamsSchema
);

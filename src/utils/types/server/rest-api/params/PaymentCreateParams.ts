import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type PaymentCreateParams = {
    planId: string;
    couponCode?: string;
    cpfCnpj: string;
    phone: string;

    billingType: 'CREDIT_CARD' | 'BOLETO' | 'PIX';
    creditCard?: {
        holderName: string;
        number: string;
        expiryMonth: string;
        expiryYear: string;
        ccv: string;
        installmentCount: number;
    };

    address: {
        street: string;
        province: string;
        postalCode: string;
        addressNumber: string;
        complement?: string;
    };
};

const PaymentCreateParamsSchema = {
    type: 'object',
    properties: {
        planId: {
            type: 'string'
        },
        couponCode: {
            type: 'string'
        },
        cpfCnpj: {
            type: 'string'
        },
        billingType: {
            type: 'string',
            enum: ['CREDIT_CARD', 'BOLETO', 'PIX']
        },
        address: {
            type: 'object',
            properties: {
                street: {
                    type: 'string'
                },
                province: {
                    type: 'string'
                },
                postalCode: {
                    type: 'string'
                },
                addressNumber: {
                    type: 'string'
                },
                complement: {
                    type: 'string'
                }
            },
            required: ['street', 'province', 'postalCode', 'addressNumber'],
            additionalProperties: false
        },
        creditCard: {
            type: 'object',
            properties: {
                holderName: {
                    type: 'string'
                },
                number: {
                    type: 'string'
                },
                expiryMonth: {
                    type: 'string',
                    minLength: 2,
                    maxLength: 2
                },
                expiryYear: {
                    type: 'string',
                    minLength: 4,
                    maxLength: 4
                },
                ccv: {
                    type: 'string'
                },
                installmentCount: {
                    type: 'number'
                }
            },
            required: [
                'holderName',
                'number',
                'expiryMonth',
                'expiryYear',
                'ccv',
                'installmentCount'
            ],
            additionalProperties: false
        }
    },
    required: ['planId', 'cpfCnpj', 'billingType', 'address'],
    additionalProperties: false
};

export const validatePaymentCreateParams =
    ajv.compile<PaymentCreateParams>(PaymentCreateParamsSchema);

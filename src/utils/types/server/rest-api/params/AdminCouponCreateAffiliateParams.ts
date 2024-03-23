import Ajv from 'ajv';

const ajv = new Ajv({
    coerceTypes: true
});

export type AdminCouponCreateAffiliateParams = {
    affiliateEmail: string;
    code: string;
};

const AdminCouponCreateAffiliateParamsSchema = {
    type: 'object',
    properties: {
        affiliateEmail: {
            type: 'string',
            minLength: 1
        },
        code: {
            type: 'string',
            minLength: 1
        }
    },
    required: ['affiliateEmail', 'code'],
    additionalProperties: false
};

export const validateAdminCouponCreateAffiliateParams =
    ajv.compile<AdminCouponCreateAffiliateParams>(AdminCouponCreateAffiliateParamsSchema);

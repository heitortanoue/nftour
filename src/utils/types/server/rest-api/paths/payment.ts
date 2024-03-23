import { AdminCouponCreateAffiliateParams } from '@rest-typing/params/AdminCouponCreateAffiliateParams';
import { PaymentCouponGetParams } from '@rest-typing/params/PaymentCouponGetParams';
import { PaymentCreateParams } from '@rest-typing/params/PaymentCreateParams';
import { PaymentPlanGetParams } from '@rest-typing/params/PaymentPlanGetParams';
import type { CupomDB, IReturnDataCheckout, PlanoDB } from '@typing';

export type PaymentEndpoints = {
    '/payment/coupon/get': {
        GET: (params: PaymentCouponGetParams) => CupomDB | null;
    };

    '/payment/coupon/create/affiliate': {
        POST: (params: AdminCouponCreateAffiliateParams) => void;
    }

    '/payment/plan/get': {
        GET: (params: PaymentPlanGetParams) => PlanoDB | null;
    };

    '/payment/create': {
        POST: (params: PaymentCreateParams) => IReturnDataCheckout;
    };
};

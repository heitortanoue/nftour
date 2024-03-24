import { Base } from './Base';
import { QRCodeDB } from '@/utils/types';

export class CouponRaw extends Base<QRCodeDB> {
	constructor(db: any) {
		super(db, 'coupon');
	}
}

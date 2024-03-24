import { Base } from './Base';
import { QRCodeDB } from '@/utils/types';

export class QRCodeRaw extends Base<QRCodeDB> {
	constructor(db: any) {
		super(db, 'qrCodes');
	}
}

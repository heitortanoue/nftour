import { Base } from './Base';
import { UsuarioDB } from '@/utils/types';

export class UserRaw extends Base<UsuarioDB> {
	constructor(db: any) {
		super(db, 'users');
	}
}

import { UsuarioDB } from '../server/database';

export interface infoUsuario extends UsuarioDB {}

export type ISection = {
	title?: string;
	pages: {
		name: string;
		icon: string;
		path: string;
		admin?: boolean;
	}[];
};

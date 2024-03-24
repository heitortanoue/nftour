import { connectToDatabase } from '../functions/database/mongodb';
import { registerModel, proxify } from './proxify';
import { QRCodeRaw } from './raw/QRCode';
import { UserRaw } from './raw/User';

const { db } = await connectToDatabase();

if (!db) {
    throw new Error('Could not connect to database');
}

registerModel(new UserRaw(db));
export const User = proxify<UserRaw>('users');

registerModel(new QRCodeRaw(db));
export const QRCode = proxify<QRCodeRaw>('qrCodes');

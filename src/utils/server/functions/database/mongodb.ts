import { Db, MongoClient } from 'mongodb';
import type { MongoClientOptions } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB as string;

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
	throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

const config: MongoClientOptions = {
	maxPoolSize: 1,
	minPoolSize: 1,
	socketTimeoutMS: 10000,
	serverSelectionTimeoutMS: 10000,
	maxIdleTimeMS: 10000
};

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
const globalAny: any = global;
let cached = globalAny.mongo;

if (!cached) {
	cached = globalAny.mongo = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<{
	client: MongoClient;
	db: Db;
}> {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		try {
			console.log('🎲 Connecting to MongoDB...');
			cached.promise = MongoClient.connect(MONGODB_URI, config).then((client) => {
				return {
					client,
					db: client.db(MONGODB_DB)
				};
			});
		} catch (error) {
			console.error('🎲 MongoDB connection error:', error);
			console.error(error);
		}
	}
	cached.conn = await cached.promise;
	return cached.conn;
}

import { ObjectId } from 'mongodb';
import type {
    BulkWriteOptions,
    Collection,
    Db,
    Filter,
    FindOneAndUpdateOptions,
    InsertOneOptions,
    ModifyResult,
    OptionalUnlessRequiredId,
    UpdateFilter,
    WithId,
    UpdateOptions,
    Document,
    FindOptions,
    FindCursor,
    UpdateResult,
    InsertManyResult,
    InsertOneResult,
    DeleteResult,
    DeleteOptions,
    EnhancedOmit,
    OptionalId,
    BulkWriteResult,
    AnyBulkWriteOperation
} from 'mongodb';

function setUpdatedAt(record: Record<string, any>): void {
    if (/(^|,)\$/.test(Object.keys(record).join(','))) {
        record.$set = record.$set || {};
        record.$set._updatedAt = new Date();
    } else {
        record._updatedAt = new Date();
    }
}

type InsertionModel<T> = EnhancedOmit<OptionalId<T>, '_updatedAt'> & {
    _updatedAt?: Date;
};

type ModelOptions = {
    preventSetUpdatedAt?: boolean;
};

type FindPaginated<C> = {
    cursor: C;
    totalCount: Promise<number>;
};

export abstract class Base<T extends { _id: string }> {
    public readonly col: Collection<T>;
    private preventSetUpdatedAt: boolean;
    private collectionName: string;

    constructor(private db: Db, protected name: string, private options?: ModelOptions) {
        this.collectionName = name;
        this.col = this.db.collection<T>(this.collectionName);
        this.preventSetUpdatedAt = options?.preventSetUpdatedAt ?? false;
    }

    public getCollectionName(): string {
        return this.collectionName;
    }

    public findOneAndUpdate(
        query: Filter<T>,
        update: UpdateFilter<T> | T,
        options?: FindOneAndUpdateOptions
    ): Promise<ModifyResult<T>> {
        return this.col.findOneAndUpdate(query, update, options || {}) as any;
    }

    async findOneById(_id: T['_id'], options?: FindOptions<T>): Promise<T | null>;

    async findOneById<P extends Document = T>(
        _id: T['_id'],
        options?: FindOptions<P>
    ): Promise<P | null>;

    public async findOneById(_id: T['_id'], options?: any): Promise<T | null> {
        const query: Filter<T> = { _id } as Filter<T>;
        if (options) {
            return this.findOne(query, options);
        }
        return this.findOne(query);
    }

    async findOne(query?: Filter<T> | T['_id'], options?: undefined): Promise<T | null>;

    async findOne<P extends Document = T>(
        query: Filter<T> | T['_id'],
        options?: FindOptions<P extends T ? T : P>
    ): Promise<P | null>;

    async findOne<P>(
        query: Filter<T> | T['_id'] = {},
        options?: any
    ): Promise<WithId<T> | WithId<P> | null> {
        const q: Filter<T> = typeof query === 'string' ? ({ _id: query } as Filter<T>) : query;
        if (options) {
            return this.col.findOne(q, options);
        }
        return this.col.findOne(q);
    }

    find(query?: Filter<T>): FindCursor<T>;

    find<P extends Document = T>(
        query: Filter<T>,
        options?: FindOptions<P extends T ? T : P>
    ): FindCursor<P>;

    find<P extends Document>(
        query: Filter<T> = {},
        options?: FindOptions<P extends T ? T : P>
    ): FindCursor<WithId<P>> | FindCursor<WithId<T>> {
        if (options) {
            return this.col.find(query, options);
        }
        return this.col.find(query);
    }

    bulkWrite(
        operations: AnyBulkWriteOperation<T>[],
        options?: BulkWriteOptions
    ): Promise<BulkWriteResult> {
        return this.col.bulkWrite(operations, options || {});
    }

    findPaginated<P extends Document = T>(
        query: Filter<T>,
        options?: FindOptions<P extends T ? T : P>
    ): FindPaginated<FindCursor<WithId<P>>>;

    findPaginated(query: Filter<T> = {}, options?: any): FindPaginated<FindCursor<WithId<T>>> {
        const cursor = options ? this.col.find(query, options) : this.col.find(query);
        const totalCount = this.col.countDocuments(query);

        return {
            cursor,
            totalCount
        };
    }

    updateOne(
        filter: Filter<T>,
        update: UpdateFilter<T> | Partial<T>,
        options?: UpdateOptions
    ): Promise<UpdateResult> {
        this.setUpdatedAt(update);
        if (options) {
            return this.col.updateOne(filter, update, options);
        }
        return this.col.updateOne(filter, update);
    }

    updateMany(
        filter: Filter<T>,
        update: UpdateFilter<T> | Partial<T>,
        options?: UpdateOptions
    ): Promise<Document | UpdateResult> {
        this.setUpdatedAt(update);
        if (options) {
            return this.col.updateMany(filter, update, options);
        }
        return this.col.updateMany(filter, update);
    }

    insertMany(
        docs: InsertionModel<T>[],
        options?: BulkWriteOptions
    ): Promise<InsertManyResult<T>> {
        docs = docs.map((doc) => {
            if (!doc._id || typeof doc._id !== 'string') {
                const oid = new ObjectId();
                return { _id: oid.toHexString(), ...doc };
            }
            this.setUpdatedAt(doc);
            return doc;
        });

        return this.col.insertMany(docs as unknown as OptionalUnlessRequiredId<T>[], options || {});
    }

    insertOne(doc: InsertionModel<T>, options?: InsertOneOptions): Promise<InsertOneResult<T>> {
        if (!doc._id || typeof doc._id !== 'string') {
            const oid = new ObjectId();
            doc = { _id: oid.toHexString(), ...doc };
        }

        this.setUpdatedAt(doc);

        return this.col.insertOne(doc as unknown as OptionalUnlessRequiredId<T>, options || {});
    }

    removeById(_id: T['_id']): Promise<DeleteResult> {
        return this.deleteOne({ _id } as Filter<T>);
    }

    async deleteOne(
        filter: Filter<T>,
        options?: DeleteOptions & { bypassDocumentValidation?: boolean }
    ): Promise<DeleteResult> {
        if (options) {
            return this.col.deleteOne(filter, options);
        }
        return this.col.deleteOne(filter);
    }

    async deleteOneById(
        _id: T['_id'],
        options?: DeleteOptions & { bypassDocumentValidation?: boolean }
    ): Promise<DeleteResult> {
        const q: Filter<T> = typeof _id === 'string' ? ({ _id } as Filter<T>) : _id;

        if (options) {
            return this.deleteOne(q, options);
        }
        return this.deleteOne(q);
    }

    async deleteMany(filter: Filter<T>, options?: DeleteOptions): Promise<DeleteResult> {
        if (options) {
            return this.col.deleteMany(filter, options);
        }
        return this.col.deleteMany(filter);
    }

    countDocuments(query: Filter<T>): Promise<number> {
        return this.col.countDocuments(query);
    }

    estimatedDocumentCount(): Promise<number> {
        return this.col.estimatedDocumentCount();
    }

    private setUpdatedAt(record: UpdateFilter<T> | InsertionModel<T>): void {
        if (this.preventSetUpdatedAt) {
            return;
        }
        setUpdatedAt(record);
    }
}

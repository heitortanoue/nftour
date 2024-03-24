import { Base } from './raw/Base';

const lazyModels = new Map<string, () => Base<any>>();
const models = new Map<string, Base<any>>();

export function getModel<T extends Base<any>>(name: string): T {
    return models.get(name) as T;
}

export function registerModel<T extends Base<any>>(model: T) {
    models.set(model.getCollectionName(), model);
}

export function handler<T extends object>(namespace: string): ProxyHandler<T> {
    return {
        get: (_target: T, prop: keyof Base<any>): any => {
            if (!models.has(namespace) && lazyModels.has(namespace)) {
                const getModel = lazyModels.get(namespace);
                if (getModel) {
                    models.set(namespace, getModel());
                }
            }

            const model = models.get(namespace);

            if (!model) {
                throw new Error(`Model ${namespace} not found`);
            }

            return model[prop];
        }
    };
}

export function proxify<T>(namespace: string): T {
    return new Proxy({}, handler(namespace)) as unknown as T;
}

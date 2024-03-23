export type PushEndpoints = {
    '/push/subscribe': {
        POST: (params: { subscription: PushSubscription }) => void;
    };

    '/push/unsubscribe': {
        POST: (params: { userId: string }) => void;
    };
};

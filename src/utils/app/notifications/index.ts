import { useEndpointRequest } from '@app/hooks/useEndpoint';

export const notificationsSupported = (window, navigator) =>
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window;

export const notificationsPermissionAlreadyAsked = (
    window: Window & typeof globalThis,
    navigator
) => {
    if (!notificationsSupported(window, navigator)) {
        return false;
    }
    return window.Notification.permission !== 'default';
};

export const PWAInstalled = () => {
    return (
        typeof window !== 'undefined' && window?.matchMedia('(display-mode: standalone)').matches
    );
};

export const unregisterNotificationSW = async () => {
    const registration = await navigator.serviceWorker.getRegistration('/notifications-sw.js');
    if (registration) {
        await registration.unregister();
    }
};

const registerServiceWorker = async () => {
    return navigator.serviceWorker.register('/notifications-sw.js');
};

export const requestNotificationPermission = async () => {
    if (!('serviceWorker' in navigator)) {
        return false;
    }

    await registerServiceWorker();
    const registration = await navigator?.serviceWorker.ready;
    const permission = await window?.Notification.requestPermission();

    if (permission !== 'granted') {
        return false;
    }

    try {
        const currentSubscription = await registration.pushManager.getSubscription();

        if (currentSubscription) {
            return true;
        }

        const options = {
            applicationServerKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
            userVisibleOnly: true
        };
        const subscription = await registration.pushManager.subscribe(options);

        await useEndpointRequest('/push/subscribe', 'POST', {
            subscription
        });

        return true;
    } catch (err) {
        return false;
    }
};

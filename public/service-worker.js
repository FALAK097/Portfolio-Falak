/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Precache and route the specified URLs
precacheAndRoute(self.__WB_MANIFEST);

// Add additional caching strategies and routes as needed

// Cache the root URL and index.html during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

// Intercept fetch requests and respond with cached resources if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

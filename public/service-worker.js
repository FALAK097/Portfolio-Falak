/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Precache and route the specified URLs
precacheAndRoute(self.__WB_MANIFEST);

// Cache the root URL and index.html during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

// Serve index.html for all navigation requests
registerRoute(
  ({ request }) => request.mode === 'navigate',
  ({ event }) => {
    return caches.match('/index.html');
  }
);

// Cache images using a CacheFirst strategy
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      // Optional: Apply cache size limits or expiration
    ],
  })
);

// Intercept fetch requests and respond with cached resources if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

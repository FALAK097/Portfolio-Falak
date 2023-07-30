/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
// const { precacheAndRoute } = require(’require workbox-precaching’);
// const { registerRoute } = require('require workbox-routing’);
// const { StaleWhileRevalidate } = require('require workbox-strategies’);
// const { ExpirationPlugin } = require('require workbox-expiration’);

// Precache and route the specified URLs
precacheAndRoute(self.__WB_MANIFEST);

// Cache the root URL and index.html during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache-v1').then((cache) => {
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

// Cache images using a StaleWhileRevalidate strategy
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new StaleWhileRevalidate({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
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

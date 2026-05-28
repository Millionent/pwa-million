const cacheName = 'million-ent-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Activation et récupération
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

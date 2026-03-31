self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Tento kód umožňuje aplikaci načítat data, i když je online
  e.respondWith(fetch(e.request));
});

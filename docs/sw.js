const CACHE_VERSION = 'v1.0.1';
const CACHE_NAME = `scout-${CACHE_VERSION}`;

const ASSETS = [
  '/2026-Scouting-App/',
  '/2026-Scouting-App/index.html',
  '/2026-Scouting-App/style.css',
  '/2026-Scouting-App/script.js',
  '/2026-Scouting-App/manifest.json',
  '/2026-Scouting-App/icon-192.png',
  '/2026-Scouting-App/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  if (url.pathname.endsWith('.html') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.js') ||
      url.pathname === '/2026-Scouting-App/') {
    
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Update cache with fresh version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback to cache if offline
          return caches.match(event.request);
        })
    );
  } 
  // Cache-first for static assets (icons, fonts, external libs)
  else {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});

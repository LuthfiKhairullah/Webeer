import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './asset/fajar.jpeg',
  './asset/jovita.jpg',
  './asset/Luthfi.jpg',
  './asset/muja.jpg',
  './assetpng/fordis.png',
  './assetpng/hero-about-us.png',
  './assetpng/hero-dashboard-company.png',
  './assetpng/hero-img.png',
  './assetpng/hero-jobsDetail.png',
  './assetpng/hero-login.png',
  './assetpng/loker.png',
  './assetpng/picture.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

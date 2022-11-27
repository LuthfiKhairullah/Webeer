import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './asset/hero-changepwd.png',
  './asset/hero-jobsDetail.png',
  './asset/hero-login.png',
  './asset/verified.png',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activationg Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
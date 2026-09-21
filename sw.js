self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('hacker-v1').then(c => c.addAll(['./chat.html','./bg.jpg','./manifest.json']))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
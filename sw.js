/* Ju-bits Kids — service worker: la app se abre sin conexión tras la primera visita.
   Las llamadas a las API de IA (Groq/Gemini) siempre van a la red. */
const CACHE = "jubits-kids-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./banner-sudadera.jpg",
  "./vera-sudadera.jpg",
  "./numi-sudadera.jpg",
  "./cromi-sudadera.jpg",
  "./lira-sudadera.jpg",
  "./brini-sudadera.jpg",
  "./ami-sudadera.jpg",
  "./inti-sudadera.jpg",
  "./nati-sudadera.jpg",
  "./coni-sudadera.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then((hit) => {
      const net = fetch(e.request).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});

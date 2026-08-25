const CACHE_NAME = "recipe-viewer-v4";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./styles.css",
    "./main.js",
    "./manifest.json",
    "./images/burger button.png",
     "./jquery.min.js",
    "./anime.esm.min.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        clients.claim()
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
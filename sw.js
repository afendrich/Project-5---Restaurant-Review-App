var cacheID = 'restaurant-001';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheID).then(cache => {
            return cache
                .addAll([
                    '/',
                    '/index.html',
                    '/css/styles.css',
                    
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/restaurant_info.js',
                    '/data/restaurants.json',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/8.jpg',
                    '/img/9.jpg',
                    '/img/10.jpg',

                 ])
                .catch(error => {
                    console.log("caches open failed: " + error);
                });
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                console.log('found file in cache');
                if(response) {
                    return response
                }
                else fetch(event.request)
            })
            .catch(error => {
                console.log(`error: ${error}`);
            })
    )
})
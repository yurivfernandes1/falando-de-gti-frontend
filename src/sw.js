const CACHE_NAME = 'falando-de-gti-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/scripts/main.js',
    '/scripts/config.js',
    '/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache aberto');
                return cache.addAll(urlsToCache);
            })
    );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Retorna do cache se encontrado
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    (response) => {
                        // Verifica se a resposta é válida
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clona a resposta
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

// Atualizar Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Notificações push (opcional)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Novo conteúdo disponível!',
        icon: 'https://raw.githubusercontent.com/yurivfernandes/falando-de-gti-frontend/refs/heads/main/src/public/favicon/favicon.jpeg',
        badge: 'https://raw.githubusercontent.com/yurivfernandes/falando-de-gti-frontend/refs/heads/main/src/public/favicon/favicon.jpeg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Ver mais',
                icon: 'https://raw.githubusercontent.com/yurivfernandes/falando-de-gti-frontend/refs/heads/main/src/public/favicon/favicon.jpeg'
            },
            {
                action: 'close',
                title: 'Fechar',
                icon: 'https://raw.githubusercontent.com/yurivfernandes/falando-de-gti-frontend/refs/heads/main/src/public/favicon/favicon.jpeg'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Falando de GTI', options)
    );
});

// Service Worker for Y-SoC Website
const CACHE_NAME = 'y-soc-v1.0.0'
const STATIC_CACHE = 'y-soc-static-v1.0.0'
const DYNAMIC_CACHE = 'y-soc-dynamic-v1.0.0'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/timeline',
  '/team',
  '/mentors',
  '/sponsors',
  '/contact',
  '/recruit',
  '/logo.png',
  '/manifest.json'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('y-soc-') && 
                     cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE
            })
            .map((cacheName) => {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            })
        )
      })
      .then(() => {
        console.log('Service worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Serving from cache:', request.url)
          return cachedResponse
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone the response
            const responseToCache = response.clone()

            // Determine cache strategy based on request type
            const cacheStrategy = getCacheStrategy(request)
            
            if (cacheStrategy.shouldCache) {
              caches.open(cacheStrategy.cacheName)
                .then((cache) => {
                  console.log('Caching response:', request.url)
                  cache.put(request, responseToCache)
                })
                .catch((error) => {
                  console.error('Failed to cache response:', error)
                })
            }

            return response
          })
          .catch((error) => {
            console.error('Fetch failed:', error)
            
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/')
            }
            
            // Return a generic error response for other requests
            return new Response('Network error', {
              status: 408,
              statusText: 'Request Timeout'
            })
          })
      })
  )
})

// Determine caching strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url)
  
  // Static assets (images, fonts, etc.)
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|eot)$/)) {
    return {
      shouldCache: true,
      cacheName: STATIC_CACHE,
      maxAge: 31536000 // 1 year
    }
  }
  
  // API requests
  if (url.pathname.startsWith('/api/')) {
    return {
      shouldCache: true,
      cacheName: DYNAMIC_CACHE,
      maxAge: 300 // 5 minutes
    }
  }
  
  // HTML pages
  if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
    return {
      shouldCache: true,
      cacheName: DYNAMIC_CACHE,
      maxAge: 3600 // 1 hour
    }
  }
  
  // Default: don't cache
  return {
    shouldCache: false,
    cacheName: null,
    maxAge: 0
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    )
  }
})

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: '/logo.png',
      badge: '/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('/')
  )
})

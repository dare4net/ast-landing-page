// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "after-school-tech-offline-v1"
const OFFLINE_URL = "/offline"

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll([OFFLINE_URL, "/", "/icons/icon-192x192.png", "/manifest.json"]).catch((error) => {
        console.error("Failed to cache resources:", error)
      })
    }),
  )
})

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== "GET") {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If request was successful, add result to cache
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(CACHE).then((cache) => {
            cache.put(event.request, responseClone)
          })
        }
        return response
      })
      .catch(() => {
        // If network request fails, try to serve from cache
        return caches.match(event.request).then((response) => {
          return response || caches.match(OFFLINE_URL)
        })
      }),
  )
})

// Clean up old caches
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE]
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName))
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete)
          }),
        )
      })
      .then(() => self.clients.claim()),
  )
})

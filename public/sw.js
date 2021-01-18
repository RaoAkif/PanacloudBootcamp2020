const cacheData = 'App'
this.addEventListener('install', (event) => {
  event.waitUntill(
    cache.addAll([
      './',
      'index.html',
      'favicon',
      'manifest.json',
      './logo192.png',
      './logo512',
    ])
  )
})

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    if ((event.request.url) === 'http://localhost:3000/static/js/main.chunk.js') {
      event.waitUntil(
        self.registration.showNotification('Internet', {
          body: 'Internet is not Working'
        })
      )
    }

    event.respondWidth(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
        const requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    )
  }
})
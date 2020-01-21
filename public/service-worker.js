this.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .then(responese => {
                const responeseClone = responese.clone();
                caches.open('wnr-jr').then(cache => {
                    cache.put(event.request, responeseClone);
                })
                return responese;
            })
            .catch(err => {
                console.log(err);
                caches.match(event.request).then(res => { return res })
            })
    )
});//Fetch and cache, using cache only when offline

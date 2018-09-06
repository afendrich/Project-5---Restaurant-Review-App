//set up service worker
if ("serviceWorker" in navigator) {
    console.log('service worker supported!');
    navigator.serviceWorker
        .register("./sw.js")
        .then(reg => {
            console.log("service worker registration successful: " + reg.scope);
        })
        .catch(error => {
            console.log("registration failed: " + error);
        });
}



/*







if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function () {
            console.log('Service Worker Registration Worked!');
        })
        .catch(function () {
            console.log('Service Worker Registration Failed!');
        });
}



*/


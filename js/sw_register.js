/*  

//this is no longer being used, see very bottom of main.js file

//set up service worker
if ('serviceWorker' in navigator) {
    console.log('service worker supported')
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('/sw.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log(`service worker:  ERROR: ${err}`))
    })
}

*/
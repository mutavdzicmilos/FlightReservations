if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Tu je sw', reg))
      .catch(err => console.log('SW nije tu', err));
  }
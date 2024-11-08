setInterval ( () => {
    const time = new Date();
    const localTime = time.toLocaleTimeString();
    document.querySelector('#time').textContent = localTime;
}, 1000)
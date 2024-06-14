// have time update every second
let currentTime = new Date().toLocaleTimeString();
let container = document.querySelector('section .container');

setInterval(() => {
    currentTime = new Date().toLocaleTimeString();
    container.innerHTML = `<h1>${currentTime}</h1>`;
}, 1000);

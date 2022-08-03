let a;
let date;
let time;

setInterval(() => {
a = new Date();
let date = a.toLocaleDateString();
let time = a.getHours() + ':' + a.getMinutes() + ':' +a.getSeconds();
document.getElementById('time').innerHTML = time + "<br> on " + date;
}, 1000);
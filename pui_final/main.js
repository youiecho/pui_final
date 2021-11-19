const btn1 = document.getElementById('btn1');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn1.onclick = function () {
    const colChange1 = 'rgb(' + random(100, 255) + ',' + random(150, 255) + ',' + random(200, 255) + ')';
    document.body.style.backgroundColor = colChange1;
}

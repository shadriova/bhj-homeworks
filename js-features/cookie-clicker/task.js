let image = document.getElementById('cookie');
let clicker = document.getElementById('clicker__counter');
cnt = 0;

function click() {
    if (image.width === 200) {
        image.width = 250;
    } else {
        image.width = 200;
    }
    
    cnt += 1;
    clicker.textContent = cnt;
}

image.onclick = click;

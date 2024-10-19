let timeElement = document.getElementById('timer');
let time = parseInt(timeElement.textContent);

let countdown = setInterval(function() {
    time -= 1;
    timeElement.textContent = time;
    if (time <= 0) {
        clearInterval(countdown);
        alert("Вы победили в конкурсе!");
    }
}, 1000); 

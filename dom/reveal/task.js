const reveals = document.querySelectorAll('.reveal');

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect();
    return bottom > 0 && top < window.innerHeight;
}

// Обработчик события прокрутки
function handleScroll() {
    reveals.forEach((reveal) => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

// Привязываем обработчик к событию прокрутки
window.addEventListener('scroll', handleScroll);

// Запускаем проверку при загрузке страницы
handleScroll();

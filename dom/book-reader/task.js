const fontSizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizes.forEach((control) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
        fontSizes.forEach((item) => {
            item.classList.remove('font-size_active');
        });
        control.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        const size = control.getAttribute('data-size');
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    })
})
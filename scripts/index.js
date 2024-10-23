document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const reviewForm = document.querySelector('#review-form');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            stars.forEach(s => {
                s.style.color = (s.getAttribute('data-value') <= rating) ? '#FFD700' : '#ccc';
            });
            console.log(`User rated: ${rating}/5`);
        });
    });
    
    reviewForm.addEventListener('submit', (ev) => {
        ev.preventDefault()
        console.log('Info submitted')
    })
});
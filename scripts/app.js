import Stars from './Stars.js';
import Review from './Review.js';
import ReviewList from './ReviewList.js';

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.querySelector('#review-form');
    const reviewSuccessMsg = document.querySelector('.review-success-msg');
    const reviewIntroMsg = document.querySelector('.review-intro-msg');
    const reviewsSection = document.querySelector('.reviews-section');

    const reviewsContainerId = '#reviews-container';
    const starsClassName = '.star';

    const stars = new Stars(starsClassName)
    stars.render()

    const reviewList = new ReviewList(reviewsContainerId);
    reviewList.render();

    if (reviewList.reviews.length != 0) {
        reviewsSection.style.display = 'block';
    }
    
    reviewForm.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const formData = new FormData(reviewForm);
        const name = formData.get('name');
        const comment = formData.get('comment');

        const review = new Review(name, stars.rating, comment);

        reviewList.addReview(review);
        reviewList.render();

        reviewForm.reset();
        stars.updateRating(5)
        
        reviewForm.style.display = 'none';
        reviewIntroMsg.style.display = 'none';

        reviewSuccessMsg.style.display = 'inline';
        reviewsSection.style.display = 'block';
    })
});
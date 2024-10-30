class Review {
    constructor(name, rating, comment = "") {
        this.name = name;
        this.rating = rating;
        this.comment = comment;
        this.date = new Date();
    }

    // Method to format the review as HTML for display
    toHTML() {
        return `
            <div class="review">
                <strong>${this.name || 'Anonymous User'}</strong> (${this.rating} stars)<br>
                <em>${this.comment || 'No comment'}</em><br>
                <small>${this.date.toLocaleDateString()}</small>
            </div>
        `;
    }
}

class ReviewList {
    constructor(containerCode) {
        this.reviews = [];
        this.containerCode = containerCode;
    }

    addReview(review) {
        this.reviews.push(review);
    }

    render() {
        const container = document.querySelector(this.containerCode);
        container.innerHTML = this.reviews.map(review => review.toHTML()).join('');
    }
}

class Stars {
    constructor(starClass) {
        this.rating = 5;
        this.starClass = starClass;

        this.initializeListeners()
    }

    initializeListeners() {
        const stars = document.querySelectorAll(this.starClass);
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = star.getAttribute('data-value');
                this.updateRating(rating)
            });
        });
    }

    updateRating(rating) {
        this.rating = rating;
        this.render();
    }

    render() {
        const stars = document.querySelectorAll(this.starClass);
        stars.forEach(s => {
            s.style.color = (s.getAttribute('data-value') <= this.rating) ? '#FFD700' : '#ccc';
        });
    }
}

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
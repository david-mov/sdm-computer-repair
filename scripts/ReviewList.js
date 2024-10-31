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

export default ReviewList;
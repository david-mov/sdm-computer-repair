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

export default Stars;
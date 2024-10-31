class Review {
  constructor(name, rating, comment = "") {
      this.name = name || 'Anonymous User';
      this.rating = rating || 5;
      this.comment = comment || 'No comment';
      this.date = new Date().toLocaleDateString();
  }

  toHTML() {
      return `
          <div class="review">
              <strong>${this.name}</strong> (${this.rating} stars)<br>
              <em>${this.comment}</em><br>
              <small>${this.date}</small>
          </div>
      `;
  }
}

export default Review;
import React, { useState } from 'react';

function ReviewForm({ onSubmitReview }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(review);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;

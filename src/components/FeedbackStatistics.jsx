
const FeedbackStatistics = ({ feedbacks }) => {
    
  const numReviews = feedbacks.length; // Calculate the number of reviews

  // Calculate the average rating
  const averageRating = numReviews === 0 ? 0 : (
    feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0) / numReviews
  ).toFixed(1); // Fixed to 1 decimal place for clarity

  return (
    <div className="feedback-stats">
      <h4>{numReviews} Review{numReviews !== 1 ? 's' : ''}</h4> {/* if more than one review it will make it plural */}      
      <h4>Average Rating: {averageRating}</h4>
    </div>
  )
}

export default FeedbackStatistics

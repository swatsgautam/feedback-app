import { useState } from "react";
import Rating from "./Rating";

const FeedbackForm = ({ onAddFeedback }) => {
    const [rating, setRating] = useState(1); // atores rating value,Default rating to 1
    const [review, setReview] = useState(''); // stores the text of review

    const handleReviewChange = (event) => { //updates the review state when input changes
        setReview(event.target.value);
    };
    
    const handleRatingChange = (newRating) => { //updates rating state when new rating is selected
        setRating(newRating);
    };
    
    // Determine if the submit button should be enabled
    const isSubmitEnabled = rating && review.trim() !== '';

     
    const handleSubmit = (event) => { //calls onAddFeedback with new feedback and reset the form
        event.preventDefault();
        if (isSubmitEnabled) {
            onAddFeedback({ rating, review });
            setReview(''); // Clear the input after submission
            setRating(1); // Reset rating to default
        }
    };
  return (
    
        <div className="card">
            <h2>How would you rate your service with us?</h2>
            <form onSubmit={handleSubmit} >
                <Rating onRatingChange={handleRatingChange} selectedRating={rating} />
                <div className='input-group'>
                    <input
                    type="text"
                    placeholder="Write a review"
                    value={review}
                    onChange={handleReviewChange}
                    />
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        disabled={!isSubmitEnabled}  >Send</button>
                </div>
            </form>
        </div>
   
    
  )
}

export default FeedbackForm

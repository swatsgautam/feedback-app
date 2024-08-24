import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, onRemove }) => { 
    //array of feedback object and callback function to handle removal

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        <FeedbackItem 
          key={index} 
          item={item} 
          index={index} 
          onRemove={onRemove} 
        />
      ))}
    </div>
  )
}

export default FeedbackList

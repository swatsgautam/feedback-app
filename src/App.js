import './App.css';
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStatistics from './components/FeedbackStatistics';
import defaultFeedback from './components/defaultFeedback';



function App() {

  const [feedback, setFeedback] = useState(defaultFeedback); //an array to store feedback array

  const handleAddFeedback = (newFeedback) => { // adds new feedback to the beginning of feedback array
    setFeedback([newFeedback, ...feedback]);
  };

  const handleRemoveFeedback = (index) => { //removes the feedback based on index
    setFeedback(feedback.filter((_, i) => i !== index));
  };

  
  

  return (
    <div >
      <Header />
      <div className="container">
        <FeedbackForm onAddFeedback={handleAddFeedback} />
        <FeedbackStatistics feedbacks={feedback} />
        <FeedbackList feedback={feedback} onRemove={handleRemoveFeedback} />
      </div>
      
    </div>
  );
}

export default App;

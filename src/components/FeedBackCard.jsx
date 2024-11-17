// eslint-disable-next-line react/prop-types
const FeedBackCard = ({ feedbacks = [] }) => {
  const minHeight = '160px'; // Simplified min height
  
  // Define classes for empty feedback and feedback with content
  const cardClasses = feedbacks.length === 0 
    ? 'p-3 text-center rounded-lg shadow-md text-gray-500 text-sm bg-gray-100 border border-gray-300'
    : 'p-3 rounded-lg shadow-md text-white bg-gradient-to-b from-blue-600 to-blue-300';

  const renderFeedbackContent = () => {
    if (feedbacks.length === 0) {
      return <div>No feedback available</div>;
    }
    
    return (
      <ul className="list-disc pl-4 space-y-1">
        {feedbacks.map((feedback, index) => (
          <li key={index} className="text-sm leading-tight">
            {feedback}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={cardClasses} style={{ minHeight }}>
      {renderFeedbackContent()}
    </div>
  );
};

export default FeedBackCard;

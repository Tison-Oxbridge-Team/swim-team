// eslint-disable-next-line react/prop-types
const FeedBackCard = ({ feedbacks = [] }) => {
  if (feedbacks.length === 0) {
    return <div>No feedback available</div>;
  }
  return (
    <div
      className="p-6 rounded-lg shadow-lg text-white min-h-[200px]"
      style={{
        background: 'linear-gradient(to bottom, #002F6C, #29ABE2)',
      }}
    >
      <ul className="list-none space-y-4">
        {feedbacks.map((feedback, index) => (
          <li key={index} className="flex items-start">
            
            <span
              className="w-6 h-6 flex items-center justify-center rounded-full bg-white font-bold text-xl mt-3"
              style={{
                background: 'white', 
                color: '#1C4C92', 
              }}
            >
              ✖
            </span>
            <span className="ml-4">{feedback}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedBackCard;

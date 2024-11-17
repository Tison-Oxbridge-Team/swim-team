import  { useState } from "react";
import FeedBackCard from "./FeedBackCard";

// eslint-disable-next-line react/prop-types
const FeedbackSummary = ({ feedbackCategories = [] }) => {
  const [activePhase, setActivePhase] = useState(null);

  const togglePhase = (phase) => {
    setActivePhase(activePhase === phase ? null : phase);
  };

  return (
    <div className="space-y-6 p-6">
      {["First Phase", "Second Phase"].map((phaseLabel, idx) => {
        const phases =
          idx === 0
            ? feedbackCategories.filter(
                (phase) =>
                  phase.phase === "First Form Phase" ||
                  phase.phase === "First Period Recovery"
              )
            : feedbackCategories.filter(
                (phase) =>
                  phase.phase === "Second Form Phase" ||
                  phase.phase === "Second Period Recovery"
              );

        return (
          <div key={phaseLabel} className="p-6 rounded-lg">
            <div className="flex justify-between items-center p-5 shadow-md">
              <h2 className="text-xl text-gray-700">{phaseLabel}</h2>
              <button
                className="text-3xl text-gray-600"
                onClick={() => togglePhase(phaseLabel)}
              >
                {activePhase === phaseLabel ? "X" : "+"}
              </button>
            </div>

            {activePhase === phaseLabel && (
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {phases.map((phaseData, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gray-50 shadow-md p-4 rounded-lg"
                    > <div className="flex justify-between flex-row">
                       <h3 className="text-xl font-bold text-center text-gray-700 mb-4">
                        {phaseData.phase}   
                      </h3>
                      <h3 className="text-xl   text-gray-700 mb-4">Time: {phaseData.timeDuration || "N/A"}</h3>
                    </div>
                     
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {phaseData.feedbacks.map(
                          (feedbackCategory, feedbackIndex) => (
                            <div key={feedbackIndex}>
                              <h4 className="text-md font-semibold mb-2 text-gray-600">
                                {feedbackCategory.type}
                              </h4>
                              <FeedBackCard feedbacks={feedbackCategory.feedbacks} />
                            </div>
                          )
                        )}
                      </div>
                      {index < phases.length - 1 && (
                        <hr className="my-6 border-t border-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackSummary;

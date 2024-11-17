import DetailsGrid from "../components/Details";
import FeedbackSummary from "../components/FeedbackSummary";
import { useState, useEffect, useMemo } from "react";

// Import a spinner component for loading (e.g., using a library like react-spinners)
import { ClipLoader } from "react-spinners";

import analysisResponse from "../../analysisResponse.json"

const Coaching = () => {
  

  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const feedbackData = useMemo(
    () => [
      {
        phase: "First Form Phase",
        feedbacks: [
          { type: "Tech Guidance", feedbacks: [] },
          { type: "Spiritual Guidance", feedbacks: [] },
          { type: "Lap Time Guidance", feedbacks: [] },
          { type: "Other Guidance", feedbacks: [] },
        ],
      },
      {
        phase: "First Period Recovery",
        feedbacks: [
          { type: "Tech Guidance", feedbacks: [] },
          { type: "Spiritual Guidance", feedbacks: [] },
          { type: "Lap Time Guidance", feedbacks: [] },
          { type: "Other Guidance", feedbacks: [] },
        ],
      },
      {
        phase: "Second Form Phase",
        feedbacks: [
          { type: "Tech Guidance", feedbacks: [] },
          { type: "Spiritual Guidance", feedbacks: [] },
          { type: "Lap Time Guidance", feedbacks: [] },
          { type: "Other Guidance", feedbacks: [] },
        ],
      },
      {
        phase: "Second Period Recovery",
        feedbacks: [
          { type: "Tech Guidance", feedbacks: [] },
          { type: "Spiritual Guidance", feedbacks: [] },
          { type: "Lap Time Guidance", feedbacks: [] },
          { type: "Other Guidance", feedbacks: [] },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      const analysis = analysisResponse.data.analysis; // Use the imported data

      const mappedFeedbackData = feedbackData.map((feedbackPhase) => {
        const phaseKey = feedbackPhase.phase
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace("_phase", "_freestyle");

        const analysisPhase = analysis[phaseKey];

        if (analysisPhase) {
          const startTime = analysisPhase.start_time || "0:00";
          const endTime = analysisPhase.end_time || "0:00";
          const [startMin, startSec] = startTime.split(":").map(Number);
          const [endMin, endSec] = endTime.split(":").map(Number);

          const totalDuration =
            endMin * 60 + endSec - (startMin * 60 + startSec);
          const durationMin = Math.floor(totalDuration / 60);
          const durationSec = totalDuration % 60;
          const formattedDuration = `${durationMin}:${String(durationSec).padStart(
            2,
            "0"
          )}`;

          feedbackPhase.timeDuration = formattedDuration;

          // Map guidance feedbacks
          if (feedbackPhase.phase === "First Period Recovery") {
            feedbackPhase.feedbacks[0].feedbacks = [
              analysisPhase.technique_guidance,
            ];
            feedbackPhase.feedbacks[1].feedbacks = [
              analysisPhase.spirit_guidance,
            ];
            feedbackPhase.feedbacks[2].feedbacks = [
              analysisPhase.lap_time_guidance, // Add Lap Time Guidance
            ];
            feedbackPhase.feedbacks[3].feedbacks = [
              analysisPhase.other_guidance, // Add Other Guidance
            ];
          } else if (feedbackPhase.phase === "Second Period Recovery") {
            feedbackPhase.feedbacks[0].feedbacks = [
              analysisPhase.technique_guidance,
            ];
            feedbackPhase.feedbacks[1].feedbacks = [
              analysisPhase.spirit_guidance,
            ];
            feedbackPhase.feedbacks[2].feedbacks = [
              analysisPhase.lap_time_guidance, // Add Lap Time Guidance
            ];
            feedbackPhase.feedbacks[3].feedbacks = [
              analysisPhase.other_guidance, // Add Other Guidance
            ];
          } else {
            // For the form phases, keep the original mapping
            feedbackPhase.feedbacks[0].feedbacks = [
              analysisPhase.technique_guidance,
            ];
            feedbackPhase.feedbacks[1].feedbacks = [
              analysisPhase.spirit_guidance,
            ];
            feedbackPhase.feedbacks[2].feedbacks = [
              analysisPhase.speed_guidance,
            ];
            feedbackPhase.feedbacks[3].feedbacks = [
              analysisPhase.metrics_analysis,
            ];
          }
        }

        return feedbackPhase;
      });

      setAnalysisResult(mappedFeedbackData);
    } catch (err) {
      console.error(err);
      setError("Error: Could not process analysis data");
    } finally {
      setLoading(false);
    }
  }, [feedbackData]);

  return (
    <div className="p-0">
      <div>
        <hr />
        <DetailsGrid
          Date="2024-08-30"
          Time="19:58:46"
          Location="Downtown Pool"
          Club="FMS #2"
          CourseId="20240830FMS#2M028"
          Swimmer="Chloe"
          Coach="Phelps"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <ClipLoader color="#00509E" loading={loading} size={50} />
          <span className="text-gray-700">Loading analysis...</span>
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : (
        <FeedbackSummary feedbackCategories={analysisResult || feedbackData} />
      )}
    </div>
  );
};

export default Coaching;

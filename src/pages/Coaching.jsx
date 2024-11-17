import FeedBackNav from "../components/FeedBackNav";
import DetailsGrid from "../components/Details";
import FeedbackSummary from "../components/FeedbackSummary";
import { useState, useEffect, useCallback, useMemo } from "react";

const Coaching = () => {
  const [swimmerData] = useState({
    name: "Chloe",
    lap_times: [32.5, 33.1, 33.8, 34.2],
    stroke_counts: [20, 22, 21, 23],
    breath_counts: [15, 16, 17, 18],
    splits: [65.6, 68.0],
    dps: [1.3, 1.4, 1.5, 1.6],
  });

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

  const fetchAnalysis = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://swimming-analysis.onrender.com/api/analyze-performance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(swimmerData),
        }
      );
      const data = await response.json();

      if (data.status === "success") {
        const analysis = data.data.analysis;

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

          return feedbackPhase;
        });

        setAnalysisResult(mappedFeedbackData);
      } else {
        setError("Error: Invalid data provided");
      }
    } catch (err) {
      console.error(err);
      setError("Error: Could not reach the API");
    } finally {
      setLoading(false);
    }
  }, [swimmerData, feedbackData]);

  useEffect(() => {
    fetchAnalysis();
  }, [fetchAnalysis]);

  return (
    <div>
      <div style={{ background: "linear-gradient(to bottom, #002F6C, #29ABE2)" }}>
        <FeedBackNav />
        <hr />
        <DetailsGrid
          Date="2024-11-16"
          Time="10:00 AM"
          Location="Downtown Pool"
          Club="Swim Club A"
          CourseId="C101"
          Swimmer="Chloe"
          Coach="Jane Smith"
        />
      </div>
      {loading ? (
        <p>Loading analysis...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <FeedbackSummary feedbackCategories={analysisResult || feedbackData} />
      )}
    </div>
  );
};

export default Coaching;

import { useState } from "react";
import CWY from "../components/CWYGraph";
import CWO from "../components/CWOGraph";
import CWW from "../components/CWWGraph";

const Data = () => {
  const [compareWith, setCompareWith] = useState("Compare With Yourself");
  const [target, setTarget] = useState("previousAverage");
  const [attribute, setAttribute] = useState("lapTime"); // Step 1: Add state for attribute

  const handleCompareWith = (e) => {
    const value = e.target.value;
    setCompareWith(value);

    // Automatically update the target based on the selected option
    if (value === "Compare With Others") {
      setTarget("Classmates");
    } else if (value === "Compare With Yourself") {
      setTarget("previousAverage");
    }
  };

  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-700 text-sm">
        <div>
          <span className="font-semibold">Date:</span> 2024-08-30
        </div>
        <div>
          <span className="font-semibold">Time:</span> 19:58:46
        </div>
        <div>
          <span className="font-semibold">Location:</span> CN. FJ. Xiamen
        </div>
        <div>
          <span className="font-semibold">Club:</span> FMS #2
        </div>
        <div>
          <span className="font-semibold">CourseID:</span> 20240830FMS#2M028
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 text-sm">
          <div className="pr-44">
            <span className="font-semibold">Swimmer:</span> Chloe
          </div>
          <div className="pr-44">
            <span className="font-semibold">CourseID:</span> M028
          </div>
          <div className="pr-44">
            <span className="font-semibold">Coach:</span> Phelps
          </div>
        </div>
        <div>
          <select
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={compareWith}
            onChange={handleCompareWith}
          >
            <option value="Compare With Yourself">Compare With Yourself</option>
            <option value="Compare With Others">Compare With Others</option>
            <option value="Pose Analysis">Pose Analysis</option>
          </select>
        </div>
      </div>

      <div className="text-center"></div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">4X50 Freestyle @ 1:00</h2>
        {compareWith === "Pose Analysis" && (
          <div className="flex space-x-6 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Style:</span> Freestyle
            </div>
            <div>
              <span className="font-semibold">Type:</span> All
            </div>
            <div>
              <span className="font-semibold">View:</span> Side
            </div>
          </div>
        )}

        {compareWith !== "Pose Analysis" && (
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 pr-5">
              <label htmlFor="target" className="font-semibold text-gray-700">
                Target:
              </label>
              {compareWith === "Compare With Yourself" ? (
                <select
                  id="target"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="previousAverage">Previous Average</option>
                </select>
              ) : (
                <select
                  id="target"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="Classmates">Classmates</option>
                  <option value="WorldWide">WorldWide</option>
                </select>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="attribute"
                className="font-semibold text-gray-700"
              >
                Attribute:
              </label>
              <select
                id="attribute"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={attribute} 
                onChange={(e) => setAttribute(e.target.value)} 
              >
                <option value="lapTime">Lap Time</option>
                <option value="strokeCount">Stroke Count</option>
                <option value="breathCount">Breath Count</option>
                <option value="dps">DPS</option> 
              </select>
            </div>
          </div>
        )}
      </div>

      {compareWith === "Compare With Yourself" ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md">
            <CWY />
          </div>
        </div>
      ) : null}
      {compareWith === "Compare With Others" && target === "WorldWide" ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md">
            <CWW attribute={attribute}/>
          </div>
        </div>
      ) : null}
      {compareWith === "Compare With Others" && target === "Classmates" ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-md">
            <CWO attribute={attribute} /> 
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Data;

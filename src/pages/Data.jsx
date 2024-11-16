import React from "react";

const Data = () => {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      {/* Date, Time, Location, and Club */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-700 text-sm">
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
      </div>

      {/* Swimmer, CourseID, and Coach */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm">
        <div>
          <span className="font-semibold">Swimmer:</span> Chloe
        </div>
        <div>
          <span className="font-semibold">CourseID:</span> M028
        </div>
        <div>
          <span className="font-semibold">Coach:</span> Phelps
        </div>
      </div>

      {/* Graph Title */}
      <div className="text-center">
        <h2 className="text-xl font-bold">4X50 Freestyle @ 1:00</h2>
      </div>

      {/* Dropdowns for Target and Attribute */}
      <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <label htmlFor="target" className="font-semibold text-gray-700">
            Target:
          </label>
          <select
            id="target"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="previousAverage">Previous Average</option>
            <option value="personalBest">Personal Best</option>
            <option value="goal">Goal</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="attribute" className="font-semibold text-gray-700">
            Attribute:
          </label>
          <select
            id="attribute"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="lapTime">Lap Time</option>
            <option value="strokeRate">Stroke Rate</option>
            <option value="distance">Distance</option>
          </select>
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="h-64 flex items-center justify-center border border-gray-300 rounded-md">

          <p className="text-gray-500">Graph goes here (e.g., Lap Time data)</p>
        </div>
      </div>
    </div>
  );
};

export default Data;

import React from "react";
import DataGraph from "../components/DataGraph";

const Data = () => {
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
          <span className="font-semibold">CourseID:</span>20240830FMS#2M028
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3  text-gray-700 text-sm">
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
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="Compare With Yourself">Compare With Yourself</option>
            <option value="Compare With Others">Compare With Others</option>
            <option value="Compare With Pose Analysis">Pose Analysis</option>
          </select>
        </div>
      </div>

      <div className="text-center">
      </div>

      <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
        <h2 className="text-xl font-bold">4X50 Freestyle @ 1:00</h2>
        <div className="flex flex-wrap">
        <div className="flex items-center space-x-4 pr-5">
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
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className=" flex flex-col items-center justify-center border border-gray-300 rounded-md">
          
          <DataGraph />
        </div>
      </div>
    </div>
  );
};

export default Data;
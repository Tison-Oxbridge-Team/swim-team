import React from "react";
import { Link } from "react-router-dom";
const SwimDashboard = () => {
  return (
    <>
      <header>
        <div className="bg-gradient-to-r from-[#002F6C] to-[#29ABE2] h-16 flex justify-between items-center p-6 pl-16">
          <nav className="flex flex-grow justify-start">
            <ul className="flex space-x-8">
              <li>
                <Link className="text-white hover:text-blue-300 text-lg font-bold">
                  AI4Swim
                </Link>
              </li>
              <li className="opacity-60">
                <Link
                  to="/live"
                  className="text-white hover:text-blue-300 text-lg"
                >
                  Live Dashboard
                </Link>
              </li>
              <li className="opacity-60">
                <Link
                  to="/coaching"
                  className="text-white hover:text-blue-300 text-lg"
                >
                  Live Coaching
                </Link>
              </li>

              <li className="relative">
                <Link
                  to="/data"
                  className="text-white hover:text-blue-300 text-lg font-semibold"
                >
                  Post Session Analysis
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 -mb-2"></div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white text-lg font-semibold">Chloe</span>
          </div>
        </div>
      </header>
      <div className="p-4 bg-gray-100">
        {/* Info Bar */}
        <div className="grid grid-cols-5 gap-4 bg-gray-100 text-gray-700 p-3 mb-4">
          <div>Date: 2024-08-30</div>
          <div>Time: 19:58-46</div>
          <div>Location: CN, FJ, Xiamen</div>
          <div>Club: FMS #2</div>
          <div>CourseID: 20240830FMS#2M028</div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-5 gap-4">
          {/* Left Side - Course Info and Video */}
          <div className="col-span-2 space-y-4">
            {/* Course Info */}
            <div className="bg-gradient-to-r from-[#002F6C] to-[#29ABE2] text-white rounded-lg shadow-lg">
              <div className="p-4">
                <div className="mb-4">
                  <div>CourseID: M028</div>
                  <div>Coach: Phelps</div>
                </div>
                <div className="space-y-2">
                  <div>Current Plan: 4×50 Freestyle @ 1:00</div>
                  <div>Next Plan: 4×100 Freestyle @ 1:40</div>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="bg-gray-300 aspect-video flex items-center justify-center rounded-lg">
              <span className="text-gray-600 text-lg">Video</span>
            </div>
          </div>

          {/* Right Side - Metrics Table */}
          <div className="col-span-3">
            <div className="overflow-x-auto rounded-lg shadow h-full">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border px-4 py-2 text-left">Name</th>
                    <th className="border px-4 py-2 text-left">Lap Time</th>
                    <th className="border px-4 py-2 text-left">Velocity</th>
                    <th className="border px-4 py-2 text-left">Stroke</th>
                    <th className="border px-4 py-2 text-left">DPS</th>
                    <th className="border px-4 py-2 text-left">
                      Overall Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Jack",
                    "Anne",
                    "William",
                    "Leo",
                    "Jennie",
                    "Krystle",
                    "Charle",
                    "Bob",
                  ].map((name, index) => (
                    <tr
                      key={name}
                      className={
                        index % 2 === 0
                          ? "bg-gray-50 hover:bg-gray-100"
                          : "hover:bg-gray-100"
                      }
                    >
                      <td className="border px-4 py-2">{name}</td>
                      <td className="border px-4 py-2"></td>
                      <td className="border px-4 py-2"></td>
                      <td className="border px-4 py-2"></td>
                      <td className="border px-4 py-2"></td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwimDashboard;

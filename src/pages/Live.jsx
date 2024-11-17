import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SwimDashboard = () => {
  const [visibleSwimmers, setVisibleSwimmers] = useState([]);
  
  const swimmers = [
    {
      name: "Victor",
      lapTime: "33.87",
      velocity: "1.48",
      stroke: "32",
      dps: "1.56",
      breathe: "11",
      distanceUnderwater: "6.47",
      diffLose: "-",
      diffTarget: "+0.22",
      overallScore: "95",
      delay: 5000 
    },
    {
      name: "Chloe",
      lapTime: "36.11",
      velocity: "1.39",
      stroke: "34",
      dps: "1.47",
      breathe: "12",
      distanceUnderwater: "7.18",
      diffLose: "+2.24",
      diffTarget: "+2.46",
      overallScore: "88",
      delay: 13000 
    },
    {
      name: "James",
      lapTime: "37.88",
      velocity: "1.32",
      stroke: "36",
      dps: "1.39",
      breathe: "13",
      distanceUnderwater: "7.52",
      diffLose: "+4.01",
      diffTarget: "+4.23",
      overallScore: "82",
      delay: 18000 
    },
    {
      name: "Krystle",
      lapTime: "40.33",
      velocity: "1.24",
      stroke: "38",
      dps: "1.32",
      breathe: "14",
      distanceUnderwater: "8.04",
      diffLose: "+6.46",
      diffTarget: "+6.68",
      overallScore: "75",
      delay: 22000
    }
  ];

  useEffect(() => {
    swimmers.forEach((swimmer) => {
      setTimeout(() => {
        setVisibleSwimmers((prev) => [...prev, swimmer.name]);
      }, swimmer.delay);
    });
  }, []);

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
              <li className="relative">
                <Link
                  to="/live"
                  className="text-white hover:text-blue-300 text-lg font-semibold"
                >
                  Live Dashboard
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 -mb-2"></div>
              </li>
              <li className="opacity-60">
                <Link
                  to="/coaching"
                  className="text-white hover:text-blue-300 text-lg"
                >
                  Live Coaching
                </Link>
              </li>
              <li className="opacity-60">
                <Link
                  to="/data"
                  className="text-white hover:text-blue-300 text-lg"
                >
                  Post Session Analysis
                </Link>
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
        <div className="grid grid-cols-5 gap-4 bg-gray-100 text-gray-700 p-3 mb-4">
          <div>Date: 2024-08-30</div>
          <div>Time: 19:58-46</div>
          <div>Location: CN, FJ, Xiamen</div>
          <div>Club: FMS #2</div>
          <div>CourseID: 20240830FMS#2M028</div>
        </div>
        <br />
        <br />

        <div className="grid grid-cols-5 gap-4 p-5 ml-4">
          <div className="col-span-2 space-y-4">
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

            <div className="bg-gray-300 aspect-video flex items-center justify-center rounded-lg">
              <span className="text-gray-600 text-lg">Video</span>
            </div>
          </div>

          <div className="col-span-3">
            <div
              className="overflow-x-auto rounded-lg shadow h-full"
              style={{ marginLeft: "20px" }}
            >
              <table className="w-full border-collapse bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border px-4 py-2 text-left">Name</th>
                    <th className="border px-4 py-2 text-left">Lap Time</th>
                    <th className="border px-4 py-2 text-left">Velocity</th>
                    <th className="border px-4 py-2 text-left">Stroke</th>
                    <th className="border px-4 py-2 text-left">DPS</th>
                    <th className="border px-4 py-2 text-left">Breathe</th>
                    <th className="border px-4 py-2 text-left">Distance Underwater</th>
                    <th className="border px-4 py-2 text-left">Diff Lose</th>
                    <th className="border px-4 py-2 text-left">Diff Target</th>
                    <th className="border px-4 py-2 text-left">Overall Score</th>
                  </tr>
                </thead>
                <tbody>
                  {swimmers.map((swimmer) => (
                    visibleSwimmers.includes(swimmer.name) && (
                      <tr
                        key={swimmer.name}
                        className="animate-fadeIn bg-gray-50 hover:bg-gray-100"
                        style={{
                          animation: "fadeIn 0.5s ease-in",
                          opacity: 0,
                          animationFillMode: "forwards"
                        }}
                      >
                        <td className="border px-4 py-2">{swimmer.name}</td>
                        <td className="border px-4 py-2">{swimmer.lapTime}</td>
                        <td className="border px-4 py-2">{swimmer.velocity}</td>
                        <td className="border px-4 py-2">{swimmer.stroke}</td>
                        <td className="border px-4 py-2">{swimmer.dps}</td>
                        <td className="border px-4 py-2">{swimmer.breathe}</td>
                        <td className="border px-4 py-2">{swimmer.distanceUnderwater}</td>
                        <td className="border px-4 py-2">{swimmer.diffLose}</td>
                        <td className="border px-4 py-2">{swimmer.diffTarget}</td>
                        <td className="border px-4 py-2">{swimmer.overallScore}</td>
                      </tr>
                    )
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default SwimDashboard;
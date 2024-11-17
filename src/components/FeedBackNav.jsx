import  { useState } from "react";

export default function FeedBackNav() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Live Dashboard" },
    { id: "coaching", label: "Live Coaching" },
    { id: "analysis", label: "Post Session Analysis" },
  ];

  return (
    <div className="p-4 text-white flex flex-row justify-between">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold mx-6">AI4Swim</h1>
        <nav className="flex gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`text-lg text-white p-2 ${
                activeItem === item.id
                  ? "font-bold underline text-white"
                  : "text-gray-700"
              } hover:text-white focus:outline-none`}
              style={{
                background: "rgba(255, 255, 255, 0.3)", 
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/40" 
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <h2>Chloe</h2>
      </div>
    </div>
  );
}

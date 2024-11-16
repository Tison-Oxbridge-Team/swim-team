import React from "react";

import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <main
        className="flex items-center justify-center bg-gray-50"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 text-lg">
            Your journey starts here. Explore data insights and coaching
            services tailored to your needs.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

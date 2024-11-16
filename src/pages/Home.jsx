import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="bg-gray-100 h-16 flex justify-center items-center">
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/data" className="text-gray-700 hover:text-blue-500 text-lg">
                Data
              </Link>
            </li>
            <li>
              <Link to="/coaching" className="text-gray-700 hover:text-blue-500 text-lg">
                Coaching
              </Link>
            </li>
          </ul>
        </nav>
      </header>


      <main className="flex items-center justify-center bg-gray-50" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-gray-600 text-lg">
            Your journey starts here. Explore data insights and coaching services tailored to your needs.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

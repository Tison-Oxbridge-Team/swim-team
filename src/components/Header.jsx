import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="bg-gray-100 h-16 flex justify-start items-center p-6">
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 text-lg font-bold"
              >
                AI4Swim
              </Link>
            </li>
            <li>
              <Link
                to="/data"
                className="text-gray-700 hover:text-blue-500 text-lg"
              >
                Live Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/data"
                className="text-gray-700 hover:text-blue-500 text-lg"
              >
                Live Coaching
              </Link>
            </li>
            <li>
              <Link
                to="/data"
                className="text-gray-700 hover:text-blue-500 text-lg"
              >
                Post Session Analysis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

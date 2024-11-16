import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-100 h-16 flex justify-between items-center p-6">
        <nav className="flex flex-grow justify-start">
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

        <div className="flex items-center space-x-4">
        <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s" 
  alt="Avatar" 
  className="w-10 h-10 rounded-full" 
/>


          <span className="text-gray-700 text-lg font-semibold">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-100 h-16 flex justify-center items-center">
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/data"
                className="text-gray-700 hover:text-blue-500 text-lg"
              >
                Data
              </Link>
            </li>
            <li>
              <Link
                to="/coaching"
                className="text-gray-700 hover:text-blue-500 text-lg"
              >
                Coaching
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

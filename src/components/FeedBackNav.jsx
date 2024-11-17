import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-[#002F6C] to-[#29ABE2] h-16 flex justify-between items-center p-6 pl-16">
        <nav className="flex flex-grow justify-start">
          <ul className="flex space-x-8">
            <li>
              <Link

                className="text-white hover:text-blue-300 text-lg font-bold"
              >
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
            <li className="relative">
              <Link
                to="/coaching"
                className="text-white hover:text-blue-300 text-lg font-semibold"
              >
                Live Coaching
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 -mb-2"></div>
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
  );
};

export default Header;
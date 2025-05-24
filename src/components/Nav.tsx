const Nav = () => {
  return (
    <div className="py-0 px-8 bg-black">
      <nav className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-2 text-white font-light">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#" className="font-medium">
            Homeware
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/src/assets/images/logo-white-no-tag.svg"
            alt="Losode Logo"
            className="w-32 mb-4"
          />
        </div>
        <div>
          <div className="flex items-center gap-4">
            {/* Search Icon and Input */}
            <div className="flex items-center bg-white rounded px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="16.5"
                  y1="16.5"
                  x2="21"
                  y2="21"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="ml-2 outline-none bg-transparent text-black"
              />
            </div>
            {/* User Icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M4 20c0-4 4-6 8-6s8 2 8 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
            {/* Love Icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
            {/* Shopping Bag Icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M6 7V6a6 6 0 1112 0v1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

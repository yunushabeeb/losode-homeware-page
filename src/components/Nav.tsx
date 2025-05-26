import { useContext, useState } from 'react';
import { navLinks } from '../lib/data';
import Fuse from 'fuse.js';
import { ProviderContext, type ContextType } from '../context/Provider';

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState('');
  // const [results, setResults] = useState(navLinks);
  const { setIsSearching, products, setProducts } = useContext(
    ProviderContext,
  ) as ContextType;
  const [filteringProducts] = useState(products);

  // Setup Fuse
  const fuse = new Fuse(filteringProducts, {
    keys: ['title', 'description'],
    threshold: 0.4,
  });

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    const value = e.target.value;
    setSearch(value);
    if (value.trim() !== '') {
      setProducts(fuse.search(value).map((res) => res.item));
    } else {
      setProducts(filteringProducts); // Reset to original products if search is empty
    }
  };

  return (
    <div className="py-2 px-4 sm:px-8 bg-white text-black md:bg-black md:text-white transition-colors duration-300">
      <nav className="flex items-center justify-between relative">
        {/* Left: Desktop Nav Links */}
        <div className="hidden md:flex flex-row items-center gap-2 font-light">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.className ? link.className : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile: Sidebar Toggle, Love Icon */}
        <div className="flex md:hidden items-center gap-2">
          {/* Sidebar Toggle */}
          <button
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
            className="p-1"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <line
                x1="4"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
          {/* Love Icon */}
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/src/assets/images/logo-white-no-tag.svg"
            alt="Losode Logo"
            className="w-32 sm:w-36 mb-0 max-md:hidden"
          />
          <img
            src="/src/assets/images/logo-black.png"
            alt="Losode Logo"
            className="w-32 sm:w-36 mb-0 md:hidden"
          />
        </div>

        {/* Right: Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
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
              value={search}
              onChange={handleSearch}
            />
          </div>

          {/* User Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
              className="h-6 w-6"
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

        {/* Right: Mobile Search & Bag */}
        <div className="flex md:hidden items-center gap-2">
          {/* Search Icon/Input */}
          <div className="relative">
            <button
              aria-label="Open search"
              className="p-1"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            {/* Expanding Search Input */}
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="absolute right-0 top-0 mt-8 w-40 px-2 py-1 rounded bg-white text-black outline-none shadow transition-all duration-200"
                style={{ zIndex: 20 }}
                value={search}
                onChange={handleSearch}
                onBlur={() => setSearchOpen(false)}
              />
            )}
          </div>
          {/* Shopping Bag Icon */}
          <button className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

        {/* Sidebar Overlay & Sidebar (always rendered for animation) */}
        <div
          className={`fixed inset-0 z-30 flex transition-opacity duration-300 ${
            sidebarOpen
              ? 'bg-black bg-opacity-40 pointer-events-auto opacity-100'
              : 'bg-black bg-opacity-0 pointer-events-none opacity-0'
          }`}
        >
          {/* Animated Sidebar */}
          <div
            className={`w-64 bg-white h-full p-6 flex flex-col gap-4 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <button
              className="self-end mb-4"
              aria-label="Close sidebar"
              onClick={() => setSidebarOpen(false)}
            >
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-black text-lg ${
                  link.className ? link.className : 'font-light'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Clickable overlay to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;

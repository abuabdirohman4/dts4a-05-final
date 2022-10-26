import React from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../Footer";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="rounded border-gray-200 bg-white-80 px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between font-playfair text-base font-bold">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap rounded-md bg-black-80 p-1.5 text-white-60">
              News
            </span>
            <span className="ml-1.5 text-black-80">Portal</span>
          </a>

          {/* Search */}
          <div className="flex md:order-2">
            <button
              type="button"
              className="mr-1 rounded-lg p-2.5 text-sm  text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>

            {/* User Profile */}
            <div className="dropdown-end dropdown">
              <label
                type="button"
                tabIndex={0}
                className=" flex h-10 w-10 rounded-lg text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:ml-3"
              >
                <img
                  className="m-auto h-8 w-8 rounded-full"
                  src={
                    user &&
                    `https://ui-avatars.com/api/?name=${user.email}&background=444444&color=fff`
                  }
                  alt="profile"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
              >
                {/* <!-- Dropdown menu --> */}
                <div className="py-3 px-4">
                  <span className="block truncate text-sm font-medium text-gray-500 ">
                    {user && user.email}
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="user-menu-button">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block py-2 px-4 text-left text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </ul>
            </div>

            <button
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* List Menu */}
          <div
            className={`${
              !open && "hidden"
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500   sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <ul className="md:bg-white md border-gray-100p-4 mt-4 flex flex-col rounded-lg border md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-200 md:p-2 md:hover:rounded-md md:hover:text-black-80 "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className=" block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-200 md:p-2 md:hover:rounded-md md:hover:text-black-80 "
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/details"
                  className=" block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-200 md:p-2 md:hover:rounded-md md:hover:text-black-80 "
                >
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";

function Form({
  title,
  buttonText,
  questionText,
  redirectText,
  page,
  changePage,
  credential,
  onChange,
  onSubmit,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-lg border border-gray-200 p-4 shadow-md sm:p-6 md:p-8">
        <div
          className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          Successfully
        </div>
        <form className="space-y-6" onSubmit={onSubmit}>
          <h5 className="text-xl font-medium text-gray-900">
            {title}{" "}
            <span className="translate-y-3 self-center whitespace-nowrap rounded-md bg-black-80 p-1 pr-1.5 pb-0 text-white-60">
              News
            </span>{" "}
            Portal
          </h5>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-black-80 focus:ring-black-80 "
              placeholder="name@email.com"
              value={credential.email}
              onChange={onChange}
              autoFocus
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-black-80 focus:ring-black-80 "
              placeholder="••••••••"
              value={credential.password}
              onChange={onChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-black-80 px-5 py-2.5 text-center text-sm font-medium text-white-60 hover:bg-black-20 hover:text-white-80 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          >
            {buttonText}
          </button>
          <div className="cursor-pointer text-sm font-medium text-gray-400">
            {questionText}{" "}
            <span
              onClick={() => {
                console.log("apa ini", page);
                // page === "login" ? changePage("register") : changePage("login");
                page === "login" ? navigate("/register") : navigate("/login");
              }}
              className="text-black-80 hover:underline "
            >
              {redirectText}
            </span>
            {/* <Link
              onClick={() => {
                console.log("apa ini", page);
                page === "login" ? changePage("register") : changePage("login");
              }}
              to={page === "login" ? "../auth/register" : "auth/login"}
              className="text-black-80 hover:underline "
            >
              {redirectText}
            </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

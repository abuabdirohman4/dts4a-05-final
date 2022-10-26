import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, login } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

function Login() {
  const [user, isLoading] = useAuthState(auth);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credential.email, credential.password);
  };

  useEffect(() => {
    if (isLoading) {
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-lg border border-gray-200 p-4 shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to{" "}
            <span className="translate-y-3 self-center whitespace-nowrap rounded-md bg-black-80 p-1 pb-0 text-white-60">
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-black-80 px-5 py-2.5 text-center text-sm font-medium text-white-60 hover:bg-black-20 hover:text-white-80 focus:outline-none focus:ring-4 focus:ring-blue-300 "
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-400 ">
            Not registered?{" "}
            <Link to="/register" className="text-black-80 hover:underline ">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

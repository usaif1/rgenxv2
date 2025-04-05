// dependencies
import React from "react";
import { Link } from "react-router";

const LoginCard: React.FC = () => {
  return (
    <form className="w-full max-w-lg bg-white p-10 rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Log in</h2>
        <p className="text-gray-600">Welcome back to RgenX</p>
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-3 border rounded-md mb-4"
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-3 border rounded-md mb-4"
          placeholder="********"
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-blue-600 text-sm">
          Forgot password?
        </a>
      </div>

      <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800">
        Sign in
      </button>

      <p className="text-center mt-6 text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-blue-600">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginCard;

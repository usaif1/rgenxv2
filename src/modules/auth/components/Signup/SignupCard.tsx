import React from "react";
import { Link } from "react-router";

const SignupCard: React.FC = () => {
  return (
    <form className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-sm">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-600">Join RgenX today</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Last Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-md"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="********"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-md"
              placeholder="********"
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
          </label>
        </div>

        <button className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 mb-4">
          Create Account
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupCard;

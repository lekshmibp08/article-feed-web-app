import React from "react";

const SignupForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Create an account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your information to create an account
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">First name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Last name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="m@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Article Preferences</label>
            <div className="grid grid-cols-2 gap-2">
              {["Sports", "Politics", "Technology", "Space", "Health", "Entertainment", "Science", "Business"].map((item) => (
                <label key={item} className="flex items-center text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Create account
          </button>

          <p className="text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="#" className="text-black font-medium hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

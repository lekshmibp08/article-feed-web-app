import React, { useState } from "react";

const LoginPage = () => {
  const [tab, setTab] = useState("email");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900">Sign in</h2>
        <p className="text-gray-500 text-sm mb-4">Enter your credentials to access your account</p>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            className={`w-1/2 py-2 text-center ${
              tab === "email" ? "border-b-2 border-black font-medium" : "text-gray-500"
            }`}
            onClick={() => setTab("email")}
          >
            Email
          </button>
          <button
            className={`w-1/2 py-2 text-center ${
              tab === "phone" ? "border-b-2 border-black font-medium" : "text-gray-500"
            }`}
            onClick={() => setTab("phone")}
          >
            Phone
          </button>
        </div>

        {/* Form Fields */}
        {tab === "email" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        )}

        {/* Sign In Button */}
        <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:opacity-90">
          Sign in
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-black font-medium underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

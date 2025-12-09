import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("This is a mock form. No backend connected.");
  };

  const handleGoogleSignIn = () => {
    setError("Google Sign-In is disabled in this mock.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-[#242d35] font-sans">
      <div className="flex flex-col items-center justify-center w-96 h-[500px] bg-black rounded-xl shadow-lg p-6">
        <img
          src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740"
          alt="Logo"
          className="w-12 h-12 mb-5"
        />
        <h2 className="text-white text-2xl font-bold mb-5">Sign in to X</h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-72 h-10 mb-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Sign in with Google
        </button>

        <div className="flex items-center w-72 h-10 my-2">
          <div className="flex-1 h-px bg-gray-500"></div>
          <p className="px-2 text-gray-400 font-semibold text-sm">OR</p>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        <form
          className="flex flex-col items-center w-full max-w-xs mt-2 gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-11/12 h-11 px-4 mb-2 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-11/12 h-11 px-4 mb-4 rounded-full text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-2/5 h-11 bg-[#009dff] text-white font-bold rounded-full transition"
          >
            Sign in
          </button>
        </form>

        {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default SignInPage;

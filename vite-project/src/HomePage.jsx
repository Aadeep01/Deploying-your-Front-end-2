import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Name</h1>
        <p className="text-lg text-gray-700">Email: your.email@example.com</p>
        <p className="text-lg text-gray-700">Phone: +123 456 7890</p>
        <p className="text-lg text-gray-700">Location: Your City, Country</p>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import "./App.css";

const ReferEarn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    myName: "",
    myEmail: "",
    friendName: "",
    friendEmail: "",
  });
  const headingStyle = {
    fontFamily: "CustomFont, sans-serif",
  };
  const buttonStyle = {
    fontFamily: "ButtonFont, sans-serif",
  };

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    closeModel();
  };
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('/3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={headingStyle}
        className="text-white text-4xl md:text-8xl font-extrabold mb-6 drop-shadow-lg"
      >
        Refer & Earn Rewards!
      </h1>
      <button
        style={buttonStyle}
        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 
        animate-bounce active:scale-90 hover:shadow-yellow-300"
        onClick={openModel}
      >
        Refer Now 🚀
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={buttonStyle}
        >
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Refer a Friend
            </h2>
            <p className="text-gray-600 text-center">
              Fill in the details below
            </p>

            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModel}
            >
              ✖
            </button>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 rounded"
                name="myName"
                value={formData.myName}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded"
                name="myEmail"
                value={formData.myEmail}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Friend's Name"
                className="border p-2 rounded"
                name="friendName"
                value={formData.friendName}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Friend's Email"
                className="border p-2 rounded"
                name="friendEmail"
                value={formData.friendEmail}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferEarn;

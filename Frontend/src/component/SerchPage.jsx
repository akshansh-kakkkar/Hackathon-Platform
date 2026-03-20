import { useState } from "react";
import "../index.css";

const filters = ["Free", "Paid", "New", "Live", "Expired"];

const hackathons = [
  {
    id: 1,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
  {
    id: 2,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
  {
    id: 3,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
  {
    id: 4,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
  {
    id: 5,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
  {
    id: 6,
    title: "Hackathon1",
    description: "worlds best hackathon happening near you, register now",
    price: "Rs. 299",
    date: "10 sept 2026",
    image: "",
  },
];

const SerchPage = () => {
  const [activeFilter, setActiveFilter] = useState("New");

  return (
    <div className="w-full min-h-screen bg-white py-16 px-6 lg:px-12">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B82F6] text-center poppins uppercase mb-12 tracking-tight">
        View Events
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="start hacking..."
          className="w-2/4 p-5 outline-[#2564eb] text-left border-2 border-[#2563EB] m-4 rounded-4xl text-xl font-medium placeholder:font-medium text-[#2563EB] poppins placeholder:text-[#2564eb90]"
        />
        <button className="bg-[#3B82F6] p-2 rounded-2xl">
          <img width={55} src="/assets/search-icon.png" alt="search icon" />
        </button>
      </div>

      {/* Filter Pills */}
      <div className="flex justify-center gap-4 md:gap-8 my-10 flex-wrap px-4 max-w-7xl mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`poppins font-medium text-lg md:text-xl rounded-3xl py-2 px-5 md:px-7 border-2 border-[#3B82F6] cursor-pointer transition-all duration-200 ${
              activeFilter === filter
                ? "bg-[#3B82F6] text-white shadow-lg scale-105"
                : "bg-white text-[#3B82F6] hover:bg-[#EBF2FF]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Hackathon Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              {hackathon.image ? (
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="p-6 md:p-8 poppins">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#3B82F6] truncate">
                    {hackathon.title}
                  </h3>
                  <p className="text-base text-gray-500 truncate mt-1">
                    {hackathon.description}
                  </p>
                </div>
                <span className="text-[#3B82F6] font-bold text-base md:text-lg whitespace-nowrap shrink-0">
                  {hackathon.price}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-3">{hackathon.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SerchPage;
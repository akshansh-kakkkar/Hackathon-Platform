import "../index.css";

const categories = [
  { id: 1, name: "High School", emoji: "🎒" },
  { id: 2, name: "College", emoji: "🎓" },
  { id: 3, name: "Tech", emoji: "💻" },
  { id: 4, name: "Meet & Greet", emoji: "👥" },
  { id: 5, name: "Business", emoji: "💼" },
  { id: 6, name: "Workshops", emoji: "👨‍🏫" },
];

const Categories = () => {
  return (
    <div className="w-full bg-[#F0F4FF] py-16 px-6 lg:px-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B82F6] text-center poppins uppercase mb-12 tracking-tight">
        Categories
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col items-center gap-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#3B82F6] poppins">
              {category.name}
            </h3>

            <div className="text-7xl md:text-8xl my-3 select-none">
              {category.emoji}
            </div>

            {/* View Button */}
            <button className="w-full max-w-[280px] py-3 border-2 border-[#3B82F6] text-[#3B82F6] rounded-xl font-semibold poppins text-base md:text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-200 cursor-pointer">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

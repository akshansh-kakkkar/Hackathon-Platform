import React from 'react';

const HostEvents = ({ openModal }) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-white backgroundimg relative overflow-hidden flex items-center justify-center min-h-[100vh]">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        
        {/* Left Column: Text & Button */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold poppins uppercase leading-tight tracking-tight">
            <span className="text-[#3B82F6]">CREATE</span> <span className="text-[#0F172A]">AND</span><br/>
            <span className="text-[#0F172A]">MANAGE EVENTS</span><br/>
            <span className="text-[#3B82F6]">EFFORTLESSLY</span>
          </h2>
          
          <button onClick={() => openModal && openModal("signup")} className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#2563EB] transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Start hosting
          </button>
        </div>

        {/* Right Column: Illustration */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="bg-white rounded-[2rem] p-4 md:p-8 w-full max-w-[500px] border border-white">
            <img 
              src="/assets/hackathon_illustration.png" 
              alt="Hackathon event illustration" 
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HostEvents;

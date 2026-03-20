import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-white backgroundimg relative overflow-hidden">
      {/* The background puzzle vectors are handled by the .backgroundimg class */}

      <h2 className="text-center text-[#3B82F6] text-3xl md:text-4xl font-extrabold poppins uppercase mb-10 tracking-tight">
        HOW IT WORKS
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 w-full">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex items-center gap-4 md:w-1/2">
            <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg shrink-0">
              1
            </div>
            <h3 className="text-[#3B82F6] text-2xl md:text-3xl font-extrabold poppins uppercase tracking-wide">
              BROWSE EVENTS
            </h3>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E0E7FF] rounded-full flex items-center justify-center shadow-inner relative">
              <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full"></div>
              <img src="/assets/calendar.svg" alt="Calendar" className="w-16 h-16 md:w-20 md:h-20 relative z-10" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12">
          <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
            <h3 className="text-[#3B82F6] text-2xl md:text-3xl font-extrabold poppins uppercase tracking-wide text-right">
              BOOK TICKETS
            </h3>
            <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg shrink-0">
              2
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E0E7FF] rounded-full flex items-center justify-center shadow-inner relative">
              <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full"></div>
              <img src="/assets/pass.svg" alt="Pass" className="w-16 h-16 md:w-20 md:h-20 relative z-10" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="flex items-center gap-4 md:w-1/2">
            <div className="bg-[#3B82F6] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg shrink-0">
              3
            </div>
            <h3 className="text-[#3B82F6] text-2xl md:text-3xl font-extrabold poppins uppercase tracking-wide">
              GET QR & ATTEND
            </h3>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#E0E7FF] rounded-full flex items-center justify-center shadow-inner relative">
              <div className="absolute inset-0 bg-white opacity-20 blur-2xl rounded-full"></div>
              <img src="/assets/qr-code.svg" alt="QR Code" className="w-16 h-16 md:w-20 md:h-20 relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

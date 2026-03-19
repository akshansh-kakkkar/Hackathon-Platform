import React from 'react'
import Navbar from './Navbar'

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className='backgroundimg min-h-[88vh] flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden'>
          
          <img src="/vector.png" alt="" className='absolute top-10 left-10 w-16 md:w-24 opacity-20 -rotate-12 pointer-events-none' />
          <img src="/vector.png" alt="" className='absolute top-[-20px] left-[40%] w-20 md:w-28 opacity-20 rotate-45 pointer-events-none' />
          <img src="/vector.png" alt="" className='absolute top-[40%] left-[-30px] w-24 md:w-32 opacity-20 rotate-[15deg] pointer-events-none' />
          <img src="/vector.png" alt="" className='absolute bottom-10 left-[20%] w-16 md:w-24 opacity-20 rotate-[-30deg] pointer-events-none' />
          <img src="/vector.png" alt="" className='absolute bottom-[-20px] right-[10%] w-24 md:w-36 opacity-20 rotate-[25deg] pointer-events-none' />
          <img src="/vector.png" alt="" className='absolute top-[20%] right-[-40px] w-16 md:w-20 opacity-20 rotate-[-10deg] pointer-events-none' />

          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-12 relative z-10 py-12'>

            <div className='flex-1 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start'>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight poppins uppercase'>
                <span className='text-[#3B82F6]'>Discover</span> <span className='text-[#0F172A]'>and</span><br />
                <span className='text-[#0F172A]'>Book Events</span><br />
                <span className='text-[#3B82F6]'>Effortlessly</span>
              </h1>
              
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 w-full sm:w-auto'>
                <button className='bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-[#2563EB] transition-all transform hover:scale-105 active:scale-95'>
                  Start Searching
                </button>
                <button className='bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-lg font-bold hover:bg-[#3B82F6] hover:text-white transition-all transform hover:scale-105 active:scale-95'>
                  Start Hosting
                </button>
              </div>
            </div>
            <div className='flex-1 flex justify-center w-full max-w-[500px]'>
              <div className='relative w-full aspect-square'>
                <div className='absolute -inset-4 bg-white/30 blur-2xl rounded-full'></div>
                <img 
                  src="/assets/hackathon_illustration.png" 
                  alt="Hackathon Illustration" 
                  className='relative w-full h-full object-contain rounded-3xl shadow-2xl border-4 md:border-8 border-white'
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default HomeScreen
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Login from "./Login";

const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState("login");

  const openModal = (view) => {
    setModalView(view);
    setIsModalOpen(true);
  };

  return (
    <>
      <nav className="poppins relative z-10">
        <div className="flex justify-between items-center text-center bg-[#1E3A8A] py-3 px-4 md:px-12">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              width={45}
              height={45}
              src="/assets/Banner.png"
              alt="logo"
              className="rounded-md md:w-[60px] md:h-[60px]"
            />
          </div>
          <div className="gap-2 sm:gap-5 flex items-center shrink-0">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 sm:w-10 sm:h-10 border-2 border-white shadow-md hover:scale-105 transition-transform"
                  }
                }}
              />
            </SignedIn>
            <SignedOut>
              <button
                onClick={() => openModal("login")}
                className="text-white bg-transparent uppercase border sm:border-2 py-1 px-2 sm:py-2 sm:px-6 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-medium hover:bg-white hover:text-[#1E3A8A] transition-all"
              >
                Login
              </button>
              <button
                onClick={() => openModal("signup")}
                className="bg-white rounded-lg sm:rounded-xl py-1 px-2 sm:py-2 sm:px-6 uppercase text-[10px] sm:text-sm font-bold text-[#0F172A] hover:bg-gray-200 transition-all shadow-md"
              >
                Sign up
              </button>
            </SignedOut>
          </div>
        </div>
      </nav>

      <Login 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialView={modalView} 
      />
    </>
  );
};

export default Navbar;

import { useSignIn, useSignUp } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Login = ({ isOpen, onClose, initialView = "login" }) => {
  const { signIn, isLoaded: isSignInLoaded } = useSignIn();
  const { signUp, isLoaded: isSignUpLoaded } = useSignUp();
  const [syncMessage, setSyncMessage] = useState("");
  const [isLoginView, setIsLoginView] = useState(initialView === "login");

  useEffect(() => {
    setIsLoginView(initialView === "login");
    if (isOpen) {
      setSyncMessage("");
    }
  }, [initialView, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="relative z-10 bg-white rounded-[40px] shadow-2xl border-[3px] border-[#3B82F6] p-8 w-full max-w-[420px] transform transition-all duration-300 animate-in zoom-in-95 duration-300 poppins">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex bg-[#1E3A8A] rounded-full p-1 mb-8 shadow-inner mt-4">
          <button
            onClick={() => setIsLoginView(false)}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${!isLoginView ? "bg-[#3B82F6] text-white shadow-lg border border-[#3B82F6]/30" : "text-gray-300 hover:text-white"}`}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setIsLoginView(true)}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 ${isLoginView ? "bg-[#1E1B4B] text-white shadow-lg" : "text-gray-300 hover:text-white"}`}
          >
            LOGIN
          </button>
        </div>

        <div className="flex justify-center mb-10">
          <div className="w-52 h-52 bg-gray-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-200 relative overflow-hidden">
            <img
              src="/assets/3d-avatar.png"
              alt="3d-avatar"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <button
          onClick={async () => {
            if (!isSignInLoaded || !isSignUpLoaded) return;

            try {
              if (isLoginView) {
                await signIn.authenticateWithRedirect({
                  strategy: "oauth_google",
                  redirectUrl: "/sso-callback",
                  redirectUrlComplete: "/",
                });
              } else {
                await signUp.authenticateWithRedirect({
                  strategy: "oauth_google",
                  redirectUrl: "/sso-callback",
                  redirectUrlComplete: "/",
                });
              }
            } catch (err) {
              console.error(err);
              setSyncMessage("Authentication failed. Please try again.");
            }
          }}
          className="w-full flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-full hover:bg-gray-50 hover:border-[#3B82F6] transition-all duration-300 group shadow-sm active:scale-95"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-6 h-6 group-hover:rotate-12 transition-transform"
          />
          <span className="font-bold text-gray-700 uppercase tracking-widest text-xs sm:text-sm group-hover:text-[#1E3A8A]">
            Continue with google
          </span>
        </button>

        {syncMessage && (
          <div
            className={`mt-6 p-3 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600`}
          >
            {syncMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

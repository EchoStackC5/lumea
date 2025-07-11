
import google from "../assets/images/google.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ClientSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-[#F6EBFD]">
      <div className="bg-white rounded-[15px] shadow-[40px_40px_60px_#E4E6EA] px-6 pt-10 pb-12 md:pt-12 md:px-[72px] md:pb-12 w-full max-w-[540px]">
        <h1 className="text-[24px] md:text-[28px] font-semibold text-[#09070A] leading-[28px] mb-8">
          Login To Your Account
        </h1>

        <form className="space-y-8">
          {/* Input Fields Section */}
          <div className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id=""
                placeholder="ayimaah@gmail.com"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
              />
            </div>



            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center h-[20px]">
                <label htmlFor="password" className="text-sm text-gray-700 leading-none">
                  Password
                </label>
                <a href="#" className="text-sm text-[#0066CC] hover:underline leading-none">
                  Forgot?
                </a>
              </div>


              <div className="relative">
                <input
                  type={showPassword ? "password" : "text"}
                  id=""
                  placeholder="Enter your password"
                  className="w-full h-[48px] px-4 pr-10 border-2 border-[#F6EBFD] rounded-md"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="space-y-6">
            <button
              type="submit"
              className="w-full h-[48px] bg-black border border-gray-300 text-white rounded-full  hover:border-transparent transition"
            >
              Log In
            </button>

            <button
              type="button"
              className="w-full h-[48px] bg-none text-black rounded-full flex items-center justify-center border-black border-1 hover:border-transition"
            >
              <img src={google} alt="Google" className="h-8 w-8 mr-2" />
              continue with google
            </button>

            <p className="text-center  text-xl text-gray-600">
              Don't Have An Account Yet?{" "}
              <a href="#" className="text-[#0066CC] font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

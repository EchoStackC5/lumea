import upload from "../assets/images/upload.png";
import google from "../assets/images/google.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SubmitButton from "../Components/SubmitButton"
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { apiClient } from "../api/client";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const signUpUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Optionally, you can check if passwords match here
    // if (form.password.value !== form.repassword.value) { ... }

    try {
      const response = await apiClient.post("cosmetologist/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 bg-[#F6EBFD]">
      <div className="bg-white rounded-[15px] shadow-[40px_40px_60px_#E4E6EA] px-6 pt-10 pb-12 md:pt-12 md:px-[72px] md:pb-12 w-full max-w-[540px]">
        <h1 className="text-[24px] md:text-[28px] font-semibold text-[#09070A] leading-[28px] mb-8">
          Create an account
        </h1>

        <form className="space-y-8" onSubmit={signUpUser}>
          {/* Input Fields Section */}
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm text-gray-700">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="First and Last Name"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="ayimaah@gmail.com"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
                required
              />
            </div>
            {/* expert input */}
            <div className="space-y-2">
              <label htmlFor="areaOfExpertise" className="block text-sm text-gray-700">
                What Is Your Area Of Expertise?
              </label>
              <input
                name="areaOfExpertise"
                type="text"
                placeholder="Enter Area Of Expert"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
                required
              />
            </div>

            {/* Upload ur Image */}
            <div className="space-y-2">
              <label htmlFor="picture" className="block text-sm text-gray-700">
                Upload A Picture Of Yourself
              </label>
              <div className="relative w-full h-[48px]">
                <input
                  name="picture"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  required
                />
                <div className="w-full h-full flex items-center justify-center border-2 border-[#F6EBFD] bg-white rounded-md pointer-events-none">
                  <img src={upload} alt="Upload Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>
            {/* Upload ur cert */}
            <div className="space-y-2">
              <label htmlFor="certificate" className="block text-sm text-gray-700">
                Upload Your Certificate
              </label>
              <div className="relative w-full h-[48px]">
                <input
                  name="certificate"
                  type="file"
                  accept="image/*,application/pdf"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  required
                />
                <div className="w-full h-full flex items-center justify-center border-2 border-[#F6EBFD] bg-white rounded-md pointer-events-none">
                  <img src={upload} alt="Upload Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full h-[48px] px-4 pr-10 border-2 border-[#F6EBFD] rounded-md"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            {/* Re-enter Password */}
            <div className="space-y-2">
              <label htmlFor="repassword" className="block text-sm text-gray-700">
                Re-Enter Password
              </label>
              <div className="relative">
                <input
                  type={showRePassword ? "password" : "text"}
                  name="repassword"
                  placeholder="Re-enter your password"
                  className="w-full h-[48px] px-4 pr-10 border-2 border-[#F6EBFD] rounded-md"
                  required
                />
                <span
                  onClick={() => setShowRePassword(!showRePassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                >
                  {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="space-y-6">
            <SubmitButton className="w-full h-[48px] bg-black border border-gray-300 text-white rounded-full  " title={"Create Account"} />
          </div>

          <button
            type="button"
            className="w-full h-[48px] bg-none text-black rounded-full flex items-center justify-center border-black border-1 hover:border-transition"
          >
            <img src={google} alt="Google" className="h-8 w-8 mr-2" />
            continue with google
          </button>

          <p className="text-center  text-xl text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0066CC] font-medium hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
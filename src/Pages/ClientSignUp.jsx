import { useNavigate, useLocation } from "react-router";
import upload from "../assets/images/upload.png";
import google from "../assets/images/google.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { apiClient } from "../api/client";
import { Link } from "react-router";
import SubmitButton from "@/Components/SubmitButton";

export default function ClientSignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  // const from = location.state?.from || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);


  const signUpUser = async (e) => {
    e.preventDefault();
    setLoading(true); 
    await new Promise((r) => setTimeout(r, 5000));
    setLoading(false);
    const form = e.target;
    const formData = new FormData(form);

    // Optionally, you can check if passwords match here
    // if (form.password.value !== form.repassword.value) { ... }

    try {
      const response = await apiClient.post("auth/register", formData);
      console.log(response);
      // navigate("/clientlogin", { state: { from } });
      navigate("/clientlogin");
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
                type="text"
                name="name"
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
                type="email"
                name="email"
                placeholder="ayimaah@gmail.com"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
                required
              />
            </div>

            {/* Upload Image */}
            <div className="space-y-2">
              <label htmlFor="fileUpload" className="block text-sm text-gray-700">
                Upload A Picture Of Yourself
              </label>
              <div className="relative w-full h-[48px]">
                <input
                  name="picture"
                  accept="image/*"
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  required
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSelectedImage(file);
                      setPreviewUrl(URL.createObjectURL(file));
                    }
                  }}
                />
                {previewUrl && (
                  <div className="mt-3 flex flex-col items-center gap-2">
                    <p className="text-sm text-green-600">Image uploaded!</p>
                    
                  </div>
                )}

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
                  name="password"
                  type={showPassword ? "password" : "text"}
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
                  name="repassword"
                  type={showRePassword ? "password" : "text"}
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
            <SubmitButton className="w-full h-[48px] bg-black border border-gray-300 text-white rounded-full  " loading={loading} title="Create Account" />

            <button
              type="button"
              className="w-full h-[48px] bg-none text-black rounded-full flex items-center justify-center border-black border-1 hover:border-transition"
            >
              <img src={google} alt="Google" className="h-8 w-8 mr-2" />
              continue with google
            </button>

            <p className="text-center  text-xl text-gray-600">
              Already have an account?{" "}
              <Link to="/clientlogin" className="text-[#0066CC] font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
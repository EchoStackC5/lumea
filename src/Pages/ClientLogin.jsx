
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { apiClient } from "../api/client"; 
import { Link } from "react-router";
import SubmitButton from "@/Components/SubmitButton";
import PlainBar from "@/Components/plainBar";
import { toast } from "sonner"


export default function ClientLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await apiClient.post("/auth/login", form);

    localStorage.setItem("ACCESS_TOKEN", response.data.token);
    localStorage.setItem("USER_ID", response.data.user._id);

    toast.success("Login successful 🎉");
    navigate("/clientdashboard");
  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Login failed. Please check your credentials.";

    toast.error(message);
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="">
      <PlainBar />
    <div className="w-full min-h-screen font-inter flex justify-center items-center pt-28  px-4 bg-[#F6EBFD]">
      <div className="bg-white rounded-[15px]  px-6 pt-10 pb-12 md:pt-12 md:px-[72px] md:pb-12 w-full max-w-[540px]">
        <h1 className="text-xl md:text-[28px]  font-semibold text-[#09070A] leading-[28px] mb-8">
          Login To Your Account
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Error Message */}
         

          {/* Input Fields Section */}
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ayimaah@gmail.com"
                className="w-full h-[48px] px-4 border-2 border-[#F6EBFD] rounded-md"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center h-[20px]">
                <label htmlFor="password" className="text-sm text-gray-700 leading-none">
                  Password
                </label>
                <a href="#" className="text-sm text-[#0066CC] hover:underline leading-none">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "password" : "text"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
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
          </div>

          {/* Buttons Section */}
          <div className="space-y-6">
            <SubmitButton title="Log In" loading={loading} className="w-full cursor-pointer h-[48px] bg-black text-white rounded-full" />
            <p className="text-center text-sm font-medium md:text-xl text-gray-600">
              Don't Have An Account Yet?{" "}
              <Link to="/clientsignUp" className="text-[#0066CC] font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
}
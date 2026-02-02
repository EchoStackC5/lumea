
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { toast } from "sonner";
import { apiClient } from "../api/client";
import AuthLayout from "@/Components/AuthLayout";
import FormInput from "@/Components/FormInput";
import SubmitButton from "@/Components/SubmitButton";
import { useForm } from "../hooks/useForm";
import { validateEmail, validatePassword } from "../utils/validation";

export default function ClientLogin() {
  const navigate = useNavigate();
  
  const { values, errors, loading, setLoading, handleChange, validate, setErrors } = useForm(
    { email: "", password: "" },
    {
      email: validateEmail,
      password: validatePassword,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post("/auth/login", values);

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
    <AuthLayout title="Login To Your Account" showPlainBar={true}>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="ayimaah@gmail.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FormInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            showPasswordToggle={true}
            forgotPasswordLink={true}
          />
        </div>

        <div className="space-y-6">
          <SubmitButton 
            title="Log In" 
            loading={loading} 
            className="w-full cursor-pointer h-[48px] bg-black text-white rounded-full" 
          />
          
          <p className="text-center text-sm font-medium md:text-xl text-gray-600">
            Don't Have An Account Yet?{" "}
            <Link to="/clientsignUp" className="text-[#0066CC] font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
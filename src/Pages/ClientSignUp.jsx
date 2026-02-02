import { useNavigate } from "react-router";
import { Link } from "react-router";
import { toast } from "sonner";
import { apiClient } from "../api/client";
import AuthLayout from "@/Components/AuthLayout";
import FormInput from "@/Components/FormInput";
import FileUpload from "@/Components/FileUpload";
import SubmitButton from "@/Components/SubmitButton";
import { useForm } from "../hooks/useForm";
import { validateEmail, validatePassword, validateConfirmPassword, validateName, validateFile } from "../utils/validation";
import google from "../assets/images/google.png";

export default function ClientSignUp() {
  const navigate = useNavigate();
  
  const { values, errors, loading, setLoading, handleChange, handleFileChange, validate } = useForm(
    { name: "", email: "", password: "", repassword: "", picture: null },
    {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
      repassword: (value, allValues) => validateConfirmPassword(allValues.password, value),
      picture: (value) => validateFile(value, "Profile picture"),
    }
  );

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileChange("picture", file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        if (values[key]) {
          formData.append(key, values[key]);
        }
      });

      const response = await apiClient.post("auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      
      toast.success("Account created successfully! 🎉");
      navigate("/clientlogin");
    } catch (error) {
      const message = 
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration failed. Please try again.";
      
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create an account" showPlainBar={true}>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <FormInput
            label="Your Name"
            name="name"
            placeholder="First and Last Name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="ayimaah@gmail.com"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FileUpload
            label="Upload A Picture Of Yourself"
            name="picture"
            accept="image/*"
            onChange={handleFileSelect}
            selectedFile={values.picture}
            error={errors.picture}
          />

          <FormInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            showPasswordToggle={true}
          />

          <FormInput
            label="Re-Enter Password"
            name="repassword"
            placeholder="Re-enter your password"
            value={values.repassword}
            onChange={handleChange}
            error={errors.repassword}
            showPasswordToggle={true}
          />
        </div>

        <div className="space-y-6">
          <SubmitButton 
            className="w-full h-[48px] bg-black border border-gray-300 text-white rounded-full" 
            loading={loading} 
            title="Create Account" 
          />

         

          <p className="text-center text-xl text-gray-600">
            Already have an account?{" "}
            <Link to="/clientlogin" className="text-[#0066CC] font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
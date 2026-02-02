import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  showPasswordToggle = false,
  forgotPasswordLink = false,
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPasswordToggle 
    ? (showPassword ? "text" : "password") 
    : type;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center h-[20px]">
        <label htmlFor={name} className="text-sm text-gray-700 leading-none">
          {label}
        </label>
        {forgotPasswordLink && (
          <a href="#" className="text-sm text-[#0066CC] hover:underline leading-none">
            Forgot Password?
          </a>
        )}
      </div>
      
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[48px] px-4 ${showPasswordToggle ? 'pr-10' : ''} border-2 border-[#F6EBFD] rounded-md ${className}`}
          {...props}
        />
        
        {showPasswordToggle && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        )}
      </div>
      
      {error && (
        <span className="text-red-600 text-xs">{error}</span>
      )}
    </div>
  );
}
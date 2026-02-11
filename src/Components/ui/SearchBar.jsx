import { Search } from "lucide-react";

export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = "Search list",
  onSearch,
  className = "",
  size = "default" // "default" or "large"
}) {
  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  const paddingClass = size === "large" ? "py-3" : "py-2";
  const iconSize = size === "large" ? 16 : 12;

  return (
    <div className={`relative focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-purple-300 rounded-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        className={`w-full pl-4 pr-12 ${paddingClass} border-0 rounded-full bg-purple-50 text-gray-700 placeholder-gray-500 outline-none focus:outline-none`}
      />
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer"
      >
        <Search size={iconSize} />
      </button>
    </div>
  );
}

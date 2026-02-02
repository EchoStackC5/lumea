import upload from "../assets/images/upload.png";

export default function FileUpload({
  label,
  name,
  accept = "image/*",
  onChange,
  selectedFile,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm text-gray-700">
        {label}
      </label>
      
      <div className="relative w-full h-[48px]">
        <input
          name={name}
          type="file"
          accept={accept}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          onChange={onChange}
          {...props}
        />
        
        <div className="w-full h-full flex items-center justify-center border-2 border-[#F6EBFD] bg-white rounded-md pointer-events-none">
          {selectedFile ? (
            <p className="text-sm text-gray-800 truncate">{selectedFile.name}</p>
          ) : (
            <img src={upload} alt="Upload Icon" className="w-5 h-5" />
          )}
        </div>
      </div>
      
      {error && (
        <span className="text-red-600 text-xs">{error}</span>
      )}
    </div>
  );
}
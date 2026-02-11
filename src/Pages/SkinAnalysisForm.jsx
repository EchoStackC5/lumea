import SkinAnalysisNav from "../Components/SkinAnalysNav";
import { CloudUpload, Sun, Flame, Camera, X, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "@/api/client";
import glassesOff from "../assets/glassesOff.svg";
import makeupIcon from "../assets/makeuplcon.svg";
import Loaders from "@/Components/Loaders";
import Webcam from "react-webcam";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";

export default function SkinAnalysisForm() {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [open, setOpen] = useState(false);
  const [hasSeenDialog, setHasSeenDialog] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [captureImage, setCaptureImage] = useState(null);
  const webCamRef = useRef(null);

  const postSkin = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    setIsloading(true);

    try {
      if (captureImage) {
        const res = await fetch(captureImage);
        const blob = await res.blob();
        formData.append("image", blob, "captured.jpg");
      } else {
        const fileInput = e.target.elements.image;
        if (fileInput && fileInput.files.length > 0) {
          const file = fileInput.files[0];

          if (!file.type.startsWith("image/")) {
            throw new Error("Please upload a valid image file.");
          }

          formData.append("image", file, file.name);
        } else {
          throw new Error("No image selected.");
        }
      }

      const response = await apiClient.post("/skin-reports/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      });

      console.log(response.data);
      toast.success("Analysis Complete!", {
        description: "Your skin analysis is ready to view.",
      });
      navigate("/ai-analyze");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Upload Failed", {
        description: "Please try a different image format or smaller size.",
      });
    } finally {
      setIsloading(false);
    }
  };

  const handleInputClick = () => {
    if (!hasSeenDialog) {
      setOpen(true);
      setHasSeenDialog(true);
    }
  };

  const handleCapture = () => {
    const imageSrc = webCamRef.current.getScreenshot();
    setCaptureImage(imageSrc);
    setShowCamera(false);
    setPreviewUrl(imageSrc);
    toast.success("Photo captured successfully!");
  };

  const clearImage = () => {
    setPreviewUrl(null);
    setCaptureImage(null);
  };

  useEffect(() => {
    if (!localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/clientlogin");
    }
  }, [navigate]);

  if (isLoading) {
    return <Loaders />;
  }

  return (
    <>
      <SkinAnalysisNav />
      <section className="bg-gradient-to-br from-backgrounds via-white to-backgrounds min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-system-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-system-primary" />
              <span className="text-sm font-medium text-system-primary">AI-Powered Analysis</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkest mb-3">
              Analyze Your <span className="text-system-primary font-system-curved">Skin</span>
            </h1>
            <p className="text-dashboar-secondary text-sm md:text-base max-w-2xl mx-auto">
              Get instant insights about your skin health with our advanced AI technology
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Instructions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-light-border shadow-sm">
                <h3 className="text-lg font-semibold text-darkest mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-system-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-system-primary font-bold">!</span>
                  </span>
                  Before You Start
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
                    <img src={glassesOff} alt="Glasses Off" className="w-8 h-8 flex-shrink-0" />
                    <p className="text-sm text-secondary-text">
                      Remove glasses and ensure your forehead is visible
                    </p>
                  </div>
                  <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
                    <Sun className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                    <p className="text-sm text-secondary-text">
                      Use good lighting for clear, accurate results
                    </p>
                  </div>
                  <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
                    <img src={makeupIcon} alt="No Makeup" className="w-8 h-8 flex-shrink-0" />
                    <p className="text-sm text-secondary-text">
                      Avoid filters and heavy makeup for best accuracy
                    </p>
                  </div>
                  <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
                    <Flame className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <p className="text-sm text-secondary-text">
                      Use high-resolution images for detailed analysis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Upload Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-light-border shadow-lg">
              <form onSubmit={postSkin} className="space-y-6">
                {/* Camera Section */}
                {showCamera ? (
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border-2 border-system-primary">
                      <Webcam
                        audio={false}
                        ref={webCamRef}
                        screenshotFormat="image/jpeg"
                        className="w-full"
                        videoConstraints={{
                          facingMode: "user",
                        }}
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleCapture}
                        className="flex-1 bg-system-primary text-white py-3 rounded-xl font-medium hover:bg-button-hover transition flex items-center justify-center gap-2"
                      >
                        <Camera className="w-5 h-5" />
                        Capture Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCamera(false)}
                        className="px-4 bg-gray-100 text-darkest rounded-xl hover:bg-gray-200 transition"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Preview or Upload Area */}
                    {previewUrl ? (
                      <div className="relative">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-xl border-2 border-system-primary"
                        />
                        <button
                          type="button"
                          onClick={clearImage}
                          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center h-64 p-6 bg-gradient-to-br from-backgrounds to-white rounded-xl border-2 border-dashed border-system-primary/30 hover:border-system-primary cursor-pointer transition group">
                        <div className="w-16 h-16 bg-system-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                          <CloudUpload className="w-8 h-8 text-system-primary" />
                        </div>
                        <p className="text-system-primary font-semibold mb-2">
                          Click to upload
                        </p>
                        <p className="text-dashboar-secondary text-sm text-center">
                          or drag and drop your image here
                        </p>
                        <p className="text-xs text-dashboar-secondary mt-2">
                          PNG, JPG up to 10MB
                        </p>
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          className="hidden"
                          onClick={handleInputClick}
                          required={!captureImage}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setPreviewUrl(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </label>
                    )}

                    {/* Action Buttons */}
                    {!previewUrl && (
                      <>
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-dashboar-secondary">or</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setShowCamera(true)}
                          className="w-full bg-darkest text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
                        >
                          <Camera className="w-5 h-5" />
                          Take a Photo
                        </button>
                      </>
                    )}
                  </>
                )}

                {/* Submit Button */}
                {previewUrl && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-system-primary to-button-hover text-white py-4 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    {isLoading ? "Analyzing..." : "Analyze My Skin"}
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-dashboar-secondary">
              Your privacy is important. All images are processed securely and deleted after analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-darkest">
              Tips for Best Results
            </DialogTitle>
            <DialogDescription className="sr-only">
              Follow these guidelines for accurate skin analysis
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
              <img src={glassesOff} alt="Glasses Off" className="w-8 h-8 flex-shrink-0" />
              <p className="text-sm text-secondary-text">
                Remove glasses and ensure your forehead is visible
              </p>
            </div>
            <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
              <Sun className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <p className="text-sm text-secondary-text">
                Use good lighting for clear, accurate results
              </p>
            </div>
            <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
              <img src={makeupIcon} alt="No Makeup" className="w-8 h-8 flex-shrink-0" />
              <p className="text-sm text-secondary-text">
                Avoid filters and heavy makeup for best accuracy
              </p>
            </div>
            <div className="flex gap-3 items-start p-3 bg-backgrounds rounded-lg">
              <Flame className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <p className="text-sm text-secondary-text">
                Use high-resolution images for detailed analysis
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

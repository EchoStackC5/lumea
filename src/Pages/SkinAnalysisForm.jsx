import SkinAnalysisNav from "../Components/SkinAnalysNav";
import { CloudUpload, Sun, Flame } from 'lucide-react';
import { useState, useEffect, } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "@/api/client";
import glassesOff from "../assets/glassesOff.svg";
import makeupIcon from "../assets/makeuplcon.svg";
import Loaders from "@/Components/Loaders";
import Webcam from "react-webcam";
import React from "react";
import FrameMan from "../assets/FrameManClound.svg";
import { Camera } from "lucide-react";

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
    const webCamRef = React.useRef(null);

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

                // Optional: Check file type and size
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
        navigate("/ai-analyze");
    } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Try a different image format or smaller size.");
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

    useEffect(() => {
        if (!localStorage.getItem("ACCESS_TOKEN")) {
            navigate("/clientlogin");
        }
    }, []);

    if (isLoading) {
        return <Loaders />;
    }

    return (
        <>
            <SkinAnalysisNav />
            <section className="bg-backgrounds min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-16">
                <div className="w-full  flex flex-col justify-center space-y-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-dm-sans font-medium text-center text-primary-dark">
                        Analyze your <span className="font-system-curved"> Skin</span>
                    </h1>

                    <div className="flex flex-col lg:flex-row w-full">
                         <img src={FrameMan} alt="lumea" className=" max-w-full w-full flex- justify-center md:max-w-xl">
                    </img>
                     <form
                        onSubmit={postSkin}
                        className=" bg-white mt-[-15px] md:mt-[-50px] lg:mt-[80px]  h-[400px] flex flex-col justify-center items-center w-full p-6  rounded-lg border border-light-border space-y-3"
                    >
                        <button
                            type="button"
                            className="w-full flex justify-center items-center gap-2 bg-yellow-600 max-w-md font-inter py-3 rounded-md"
                            onClick={() => setShowCamera(true)}
                        >
                             <span><Camera/></span>
                            Take a photo
                        </button>


                        {showCamera && (<div className=" flex flex-col items-center space-y-4">
                            <Webcam
                                audio={false}
                                ref={webCamRef}
                                screenshotFormat="image/jpeg"

                            />
                            <button type="button"
                                className="w-full  border  border-system-primary max-w-md font-inter py-3 rounded-md"
                                onClick={() => {
                                    const imageSrc = webCamRef.current.getScreenshot();
                                    setCaptureImage(imageSrc);
                                    setShowCamera(false);
                                    setPreviewUrl(imageSrc);

                                }}>Take a photo</button>
                               
                        </div>)}

                        <p className="text-dashboar-secondary mt-8">or</p>
                        <label className="flex flex-col items-center justify-center w-full max-w-md h-48 p-6 gap-2 bg-[#F4E8FC] rounded-lg cursor-pointer">
                            <CloudUpload className="text-[#322F2F]" />
                            <p className="text-system-primary font-medium text-sm text-center">
                                Click to upload or <span className="text-dashboar-secondary">drag and drop your image</span>
                            </p>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="hidden"
                                onClick={handleInputClick}
                                onFocus={handleInputClick}
                                required={!captureImage}
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setPreviewUrl(URL.createObjectURL(file));
                                    }
                                }}

                            />
                        </label>

                        {previewUrl && (
                            <img
                                src={previewUrl}
                                alt="Skin Preview"
                                className="rounded-lg max-w-xs h-auto border border-light-border"
                            />
                        )}

                        <button
                            type="submit"
                            className="bg-primary-dark font-poppins font-medium hover:bg-yellow-500 hover:text-darkest active:bg-yellow-500 active:text-darkest text-white rounded-full py-3 w-3/5 lg:w-3/8 px-4 cursor-pointer"
                        >
                            Analyze Skin
                        </button>
                    </form>
                    </div>

                   

                   

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent className="flex justify-center items-center w-full max-w-full sm:max-w-md md:max-w-md lg:max-w-xs mx-auto">
                            <DialogHeader>
                                <DialogTitle className="">Instructions</DialogTitle>
                                <DialogDescription>
                                    <div>
                                        <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm bg-backgrounds p-2 border-b border-t border-light-border cursor-pointer">
                                            <span className="w-8">
                                                <img src={glassesOff} alt="Glasses Off" className="w-8 h-8" />
                                            </span>
                                            Take off your glasses and make sure bangs are not covering your forehead
                                        </p>
                                        <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm  p-2 cursor-pointer">
                                            <span><Sun /> </span>
                                            Ensure the image is clear and well-lit and taken in a lit environment.
                                        </p>
                                        <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm bg-backgrounds p-2 border-b border-t border-light-border cursor-pointer">
                                            <span className="w-8">
                                                <img src={makeupIcon} alt="No Makeup" className="w-8 h-8" />
                                            </span>
                                            Avoid using filters or heavy editing to get more accurate results.
                                        </p>
                                        <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm  p-2 border-b border-t border-light-border cursor-pointer">
                                            <span><Flame /> </span>
                                            For best results, use a high-resolution image.
                                        </p>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        </>
    );
}

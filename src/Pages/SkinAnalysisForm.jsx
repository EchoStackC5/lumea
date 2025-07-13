import SkinAnalysisNav from "../Components/SkinAnalysNav";
import { CloudUpload, Glasses } from 'lucide-react';
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function SkinAnalysisForm() {
    const [open, setOpen] = useState(false);
    const [hasSeenDialog, setHasSeenDialog] = useState(false);

    const handleInputClick = () => {
        if (!hasSeenDialog) {
            setOpen(true);
            setHasSeenDialog(true);
        }
    }

    return (
        <>
            <SkinAnalysisNav />
            <section className="bg-backgrounds min-h-screen flex flex-col p-4 sm:p-8 md:p-12 lg:p-16">
                <div className="w-full max-w-3xl mx-auto flex flex-col justify-center space-y-8">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-dm-sans font-medium text-center text-primary-dark">
                        Analyze your Skin
                    </h1>

                    <form className="bg-white h-[300px] flex flex-col justify-center items-center w-full p-6 rounded-lg border border-light-border space-y-6">

                        <label className="flex flex-col items-center justify-center w-full max-w-md h-48 p-6 gap-2 bg-[#F4E8FC] rounded-lg cursor-pointer">
                            <CloudUpload className="text-[#322F2F]" />
                            <p className="text-system-primary font-medium text-sm text-center">
                                Click to upload or <span className="text-dashboar-secondary">drag and drop your image</span>
                            </p>
                            <input type="file" className="hidden" accept="image/*"
                                // onClick={() => setOpen(true)}
                                // onFocus={() => setOpen(true)}
                                onClick={handleInputClick}
                                onFocus={handleInputClick}

                            />
                        </label>

                        <button className="bg-primary-dark font-poppins font-medium hover:bg-yellow-500 hover:text-darkest active:bg-yellow-500 active:text-darkest text-white rounded-full py-3 w-3/5 lg:w-3/8 px-4 cursor-pointer">Analyze Skin</button>



                    </form>
                    <Dialog open={open} onOpenChange={setOpen}>
                        {/* <DialogTrigger>Open</DialogTrigger> */}
                        <div className="">
                            <DialogContent className="flex justify-center items-center w-full max-w-full sm:max-w-md md:max-w-md lg:max-w-xs mx-auto">
                                <DialogHeader>
                                    <DialogTitle className="">Instructions</DialogTitle>
                                    <DialogDescription>
                                        <div>
                                            <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm bg-backgrounds p-2 border-b border-t border-light-border cursor-pointer"> <span><Glasses /> </span> Take off your glasses and make sure bangs are not covering your forehead</p>
                                            <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm  p-2 cursor-pointer"> <span><Glasses /> </span> Ensure the image is clear and well-lit and taken in a lit environment.</p>
                                            <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm bg-backgrounds p-2 border-b border-t border-light-border cursor-pointer"> <span><Glasses /> </span> Avoid using filters or heavy editing to get more accurate results.</p>
                                            <p className="flex gap-2 max-w-xs justify-center text-start items-center font-dm-sans text-primary-dark text-sm  p-2 border-b border-t border-light-border cursor-pointer"> <span><Glasses /> </span> For best results, use a high-resolution image.</p>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </div>

                    </Dialog>
                </div>
            </section>

        </>

    )
}
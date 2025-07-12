import SkinAnalysisNav from "../Components/SkinAnalysNav";
import { CloudUpload } from 'lucide-react';
export default function SkinAnalysisForm() {
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
                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                        <button className="bg-primary-dark font-poppins font-medium hover:bg-yellow-500 hover:text-darkest active:bg-yellow-500 active:text-darkest text-white rounded-full py-3 w-3/12">Analyze Skin</button>

                    </form>
                </div>
            </section>

        </>

    )
}
import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
export default function Step1({ steps }) {

    const [activeStep, setActiveStep] = useState(1)

    const nextStep = () => {
        setActiveStep((prevStep) => prevStep + 1)
    }

    const prevStep = () => {
        setActiveStep((prevStep) => prevStep - 1)
    }

    const totalSteps = steps.length

    const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

    const renderStepForm = () => {
    switch (activeStep) {
      case 1:
        return <FormStep1 />;
      case 2:
        return <FormStep2 />;
      default:
        return null;
    }
  };
    return (
        <div className="mx-auto w-full max-w-2xl px-4 pb-10">
            <div className="before:transform-y-1/2 relative mt-14 flex justify-between before:absolute before:top-1/2 before:left-0 before:h-1 before:w-full before:bg-light-border">
                {steps.map(({ step, label }) => (
                    <div className="relative z-10" key={step}>
                        <div
                            className={`flex size-16 items-center justify-center rounded-full border-2 border-light-border  transition-all delay-200 ease-in ${activeStep >= step ? 'border-purple-400 bg-system-primary' : 'bg-white text-primary-dark'
                                }`}
                        >
                            {activeStep > step ? (
                                <div className="-scale-x-100 rotate-45 text-2xl font-semibold text-white">
                                    L
                                </div>
                            ) : (
                                <span className="text-lg font-medium text-primary-dark">{step}</span>
                            )}
                        </div>
                        <div className="absolute top-24 left-1/2 -translate-x-2/4 -translate-y-2/4">
                            <span className="text-sm font-semibold text-primary-dark text-center text-nowrap">{label}</span>
                        </div>
                    </div>
                ))}
                <div
                    className="transform-y-1/2 absolute top-1/2 left-0 h-1 w-full bg-system-primary transition-all delay-200 ease-in"
                    style={{ width: width }}
                ></div>
      
            </div>
                            {/* Form Step Component */}
      <div className="flex flex-col justify-center items-center mt-30">{renderStepForm()}</div>
       
            <div className="mt-28 flex justify-between">
                <button
                    className="rounded-md border bg-gray-500 px-8 py-1.5 text-base font-medium text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
                    onClick={prevStep}
                    disabled={activeStep === 1}
                >
                    Previous
                </button>
                <button
                    className="rounded-md border bg-gray-500 px-8 py-1.5 text-base font-medium text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
                    onClick={nextStep}
                    disabled={activeStep === totalSteps}
                >
                    Next
                </button>
            </div>
        </div>

    )
}
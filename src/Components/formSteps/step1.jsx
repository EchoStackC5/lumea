import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import { ArrowLeft } from 'lucide-react';

import { apiFetcher } from "@/api/client";
import { apiClient } from "@/api/client";
import { useNavigate } from "react-router";

export default function Step1({ steps }) {
  const navigate = useNavigate();

  const [toast, setToast] = useState({ show: false, message: '', type: '' })

    const showToast = (message, type) => {
        setToast({ show: true, message, type })
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' })
        }, 3000)
    }


  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    skinType: "",
    concern: "",
    description: "",
    weight: "",
    height: "",
    gender: "",
    date: "",
    cosmetologist: "",
  });

  const handleNext = (stepData) => {
    // Update form data with data from current step
    setFormData((prev) => ({ ...prev, ...stepData }));
    
    // Move to next step
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async (finalStepData) => {
    try {
      const completeFormData = { ...formData, ...finalStepData };
      const { date, ...rest } = completeFormData;

      // Parse datetime-local format (YYYY-MM-DDTHH:MM)
      const [datepart, timepart] = date.split("T");

      const response = await apiClient.post( "/appointments",
        {
          ...rest,
          date: datepart,  // YYYY-MM-DD
          time: timepart,  // HH:MM
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          },
        }
      );

      console.log("Appointment created:", response.data);
      // alert("Appointment booked successfully!");
      showToast('Appointment Booked Successfully!', 'success')
      setTimeout(() => {
                navigate("/clientdashboard")
            }, 1500)
      
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong");
    }
  };

  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  const renderStepForm = () => {
    switch (activeStep) {
      case 1:
        return (
          <FormStep1 
            onNext={handleNext} 
            defaultValues={formData} 
          />
        );
      case 2:
        return (
          <FormStep2 
            onNext={handleNext} 
            defaultValues={formData} 
          />
        );
      case 3:
        return (
          <FormStep3 
            onNext={handleSubmit} 
            defaultValues={formData} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-10">
      {/* Progress Indicator */}
      <div className="before:transform-y-1/2 relative mt-14 flex justify-between before:absolute before:top-1/2 before:left-0 before:h-1 before:w-full before:bg-light-border">
        {steps.map(({ step, label }) => (
          <div className="relative z-10" key={step}>
            <div
              className={`flex size-16 items-center justify-center rounded-full border-2 border-light-border transition-all delay-200 ease-in 
                ${activeStep >= step 
                  ? 'border-purple-400 bg-system-primary text-white' 
                  : 'bg-white text-primary-dark'
                }`}
            >
              {activeStep > step ? (
                <div className="-scale-x-100 rotate-45 text-2xl font-semibold">
                  L
                </div>
              ) : (
                <span className="text-lg font-medium">{step}</span>
              )}
            </div>
            <div className="absolute top-24 left-1/2 -translate-x-2/4 -translate-y-2/4">
              <span className="text-sm font-semibold text-primary-dark text-center text-nowrap">
                {label}
              </span>
            </div>
          </div>
        ))}
        <div
          className="transform-y-1/2 absolute top-1/2 left-0 h-1 w-full bg-system-primary transition-all delay-200 ease-in"
          style={{ width: width }}
        />
      </div>

      {/* Form Step Component */}
      <div className="flex flex-col w-full justify-center items-center mt-30">
        {renderStepForm()}
      </div>

      {/* Navigation Buttons - Only show if not on last step */}
      {/* {activeStep < totalSteps && (
        <div className="mt-28 flex justify-between">
          <button
            className="flex justify-center items-center gap-2 rounded-full px-8 py-3 text-purple-900 text-base font-medium hover:bg-yellow-500 hover:text-darkest disabled:cursor-not-allowed disabled:bg-purple-300 disabled:text-purple-700"
            onClick={handlePrevious}
            disabled={activeStep === 1}
          >
            <ArrowLeft />
            Previous
          </button>
          <button
            className="rounded-full border bg-system-primary px-8 py-1.5 text-base font-medium text-white hover:bg-yellow-500 hover:text-darkest disabled:cursor-not-allowed disabled:bg-purple-300 disabled:text-purple-700"
            onClick={() => {
              // This button is now just for display - actual next is handled by form submission
              console.log("Use form submission to proceed");
            }}
            disabled={true}
          >
            Next
          </button>
        </div>
      )} */}

      {toast.show && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
                    toast.type === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                }`}>
                    <div className="flex items-center space-x-2">
                        {toast.type === 'success' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                        <span className="font-medium">{toast.message}</span>
                    </div>
                </div>
            )}
    </div>
  );
}
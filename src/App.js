import React, { useState} from 'react';
import FormStep from './components/formStep';
import ProgressBar from './components/progressBar';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData); 
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center container mx-auto p-4">
      {currentStep < 5 && (
        <ProgressBar currentStep={currentStep} totalSteps={4} /> 
      )}
      <div className="mb-2 flex items-center justify-center main-content">
        <FormStep
          currentStep={currentStep}
          formData={formData}
          setFormData={setFormData}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleFormSubmit={handleFormSubmit}
          setCurrentStep={setCurrentStep} 
        />
      </div>
    </div>
  );
}

export default App;
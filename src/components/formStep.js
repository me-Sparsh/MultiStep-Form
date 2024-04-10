import React, {useState, useEffect} from 'react';
import FormRadioOption from './formRadioOptions';
import Step6Label from './step6Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


function FormStep({ formData, setFormData, handleFormSubmit, currentStep, handleNextStep, setCurrentStep}) {
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      heading: "Which describes you best?",
      subheading:"This will help us personalize your experience.",
      options: [
        { value: 'student', text: 'Student or soon to be enrolled', icon: 'fa-graduation-cap' },
        { value: 'professional', text: 'Professional pursuing a career', icon: 'fa-briefcase' },
        { value: 'parent', text: 'Parent of a school-age child', icon: 'fa-family' },
        { value: 'lifelongLearner', text: 'Lifelong learner', icon: 'fa-book' }, 
        { value: 'teacher', text: 'Teacher', icon: 'fa-chalkboard-teacher' },
        { value: 'other', text: 'Other', icon: 'fa-ellipsis-h' }
      ]
    },
    
    {
      heading: "Which are you most interested in?",
      subheading:"Choose just one. This will help us get you started (but won't limit your experience).",
      options: [
        { value: 'learning', text: 'Learning specific skills to enhance my career', icon: 'fa-chart-line'},
        { value: 'exploring', text: 'Exploring new topics I am interested in', icon: 'fa-globe' },
        { value: 'refreshing', text: 'Refreshing my Math foundations', icon: 'fa-infinity' },
        { value: 'exercising', text: 'Exercising my brain to stay sharp', icon: 'fa-bullseye' },
        { value: 'other', text: 'Somthing else', icon: 'fa-eye' },
      ]
    },

    {
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683288662050-a0c17370365d?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      heading:"You are in the right place.",
      subheading:"Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science and computer science.", 
      isBlackSubheading: true,
      isThreeLineSubheading: true
    },

    {
      heading: "What is your math comfort level?",
      subheading:"Choose the highest level you feel confident in -- you can always adjust later.",
      options: [
        { value: 'arithmetic', text: 'Arithmetic' },
        { value: 'algebra', text: 'Basic Algebra'},
        { value: 'intermediate', text: 'Intermediate Algebra'},
        { value: 'calculas', text: 'Calculas'},
      ]
    },

    {
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/27/38/63/1000_F_227386387_j2V7Q3CS66SL7A6HrH0jS1ek3QJhGwIp.jpg',
      heading:"You're on your way!",
      subheading:<i>⭐⭐⭐⭐⭐ <br/>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."<br/><br/>-Jacob S.</i>,
      isBlackSubheading: true,
      isThreeLineSubheading: true
    },

    {
      heading: "Finding learning path recommendations for you based on your responses",
      isLoading: true,
      imageUrl: 'https://i.stack.imgur.com/NKEOW.jpg'
    },

    {
      heading: "Learning paths based on your answers",
      subheading:"Choose one to get started. You can switch anytime.",
      options: [
        { value: 'foundational', text: 'Foundational Math Build your foundational skills in algebra, geometry and probability.'},
        { value: 'mathematical', text: 'Mathematical Thinking Build your foundational skills in algebra, geometry and probability.'},
      ]
    },
  ];

  const handleOptionChange = (event) => {
    setFormData({ ...formData, [currentStep]: event.target.value });
  };

  const isOptionSelected = () => {
    return formData[currentStep] !== undefined;
  };

  useEffect(() => {
    if (currentStep === 5) {
      setIsLoading(true); 
  
      const timer = setTimeout(() => {       
        handleNextStep(); // Use handleNextStep for state update
        setIsLoading(false);
  
      }, 1500); 
  
      return () => clearTimeout(timer);
    }
  }, [currentStep, handleNextStep]); 

  const handleContinue = () => {
    if (currentStep === 5) { // Check if it's the 5th step
      setIsLoading(true);
    } else {
      handleNextStep();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {currentStep > 0 && currentStep <= 4 && (
        <button
          type="button"
          className="btn-arrow-left"
          onClick={handlePreviousStep}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      )}
      {/* Step content */}
      <div className="flex flex-row space-x-4 items-center">
        {/* Left side (image) */}
        {(currentStep === 2 || currentStep === 4) && steps[currentStep].imageUrl && (
          <img src={steps[currentStep].imageUrl} alt="" className="w-80 h-100 mr-20 image1" />
        )}
        {/* Right side (heading, subheading, options) */}
        <div className="flex flex-col space-y-2">
          <div className="form-step-heading">
            {currentStep === 5 && steps[currentStep].imageUrl && (
              <div className="text-center mb-2">
                <img src={steps[currentStep].imageUrl} alt="Loading..." className="w-30 h-30 mb-2 mx-auto" />
              </div>
            )}
            {/* Heading */}
            <h2 className={`text-2xl font-semibold w-full ${(currentStep === 2 || currentStep === 4) ? '' : 'text-center'} mb-5`}>{steps[currentStep].heading}</h2>
            {/* Subheading */}
            {steps[currentStep].subheading && (
              <div className={`subheading-container ${(currentStep === 2 || currentStep === 4) ? '' : 'text-center'} ${steps[currentStep].isBlackSubheading ? 'text-black' : 'text-gray-500'} mb-5`} style={{ maxWidth: steps[currentStep].isThreeLineSubheading ? '28em' : 'none', overflowY: 'auto' }}>
                <p style={{ wordWrap: 'break-word' }}>{steps[currentStep].subheading}</p>
              </div>
            )}
          </div>
          {/* Options */}
          {currentStep !== 6 && steps[currentStep].options && (
            <div className='square-option-container'>
              <div className={(currentStep === 3) ? 'flex justify-center' : ''}>
                  {steps[currentStep].options.map((option) => (
                      <FormRadioOption
                          key={option.value}
                          optionText={option.text}
                          icon={option.icon}
                          value={option.value}
                          checked={formData[currentStep] === option.value}
                          onChange={handleOptionChange}
                          className={`flex text-center radio-box ${(currentStep === 3 ? 'square-option' : '')} mb-2 mx-4`}
                      />
                  ))}
                </div>
              </div>
          )}
          {currentStep === 6 && (
            <div className="flex justify-center step6-label mb-10">
              {steps[currentStep].options.map((option) => (
                <div key={option.value}> 
                  <Step6Label
                    key={option.value}
                    optionText={option.text}
                    icon={option.icon}
                    value={option.value}
                    checked={formData[currentStep] === option.value}
                    onChange={handleOptionChange}
                    showImage={currentStep === 6}
                    showMostPopular={currentStep === 6 && option.value === 'foundational'}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {!steps[currentStep].isLoading && (
        <div className="flex justify-center mt-10">
          {currentStep !== 6 && (
          <button
            type="button"
            onClick={handleContinue}
            className={`btn ${(!steps[currentStep].options || isOptionSelected()) ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'} p-3 border rounded-lg w-40`}
            disabled={isLoading || (steps[currentStep].options && !isOptionSelected())}
          >
            {currentStep === steps.length - 1 ? '' : 'Next'}
          </button>
          )}
        </div>
      )}
      {/* Loading step */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="loader"></div>
          <p className="ml-2"></p>
        </div>
      )}
      <button 
        id="previous-step-button"
        className="opacity-50 hover:opacity-100 focus:outline-none disabled:opacity-25 cursor-pointer absolute left-0 top-1/2 transform -translate-y-50 z-10"
        disabled={currentStep === 1} // Initially disabled on step 1
        onClick={handlePreviousStep} // Function to handle click
      >
        <i className="fa-angle-left"></i> 
      </button>
    </form>
  );
}

export default FormStep;

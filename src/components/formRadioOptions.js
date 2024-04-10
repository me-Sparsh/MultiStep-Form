import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBriefcase, faPersonBreastfeeding, faGraduationCap, faChalkboardTeacher, faPlus, faChartLine, faGlobe, faInfinity, faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';
import { faCalculator, faPlusMinus, faSubscript, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';

function FormRadioOption({ optionText, value, checked, onChange, className, children}) {
    const icon = {
        'Student or soon to be enrolled': faUserGraduate,
        'Professional pursuing a career': faBriefcase,
        'Parent of a school-age child': faPersonBreastfeeding,
        'Lifelong learner': faGraduationCap,
        'Teacher': faChalkboardTeacher,
        'Other': faPlus,

        'Learning specific skills to enhance my career': faChartLine, 
        'Exploring new topics I am interested in': faGlobe,
        'Refreshing my Math foundations': faInfinity,
        'Exercising my brain to stay sharp': faBullseye,
        'Somthing else': faEye,

        'Arithmetic': faPlusMinus,
        'Basic Algebra': faSubscript,
        'Intermediate Algebra': faSquareRootVariable,
        'Calculas': faCalculator
    }[optionText];

    const optionWords = optionText.split(' ');

    return (
        <div className="label-container align-items">
            <label className={`border rounded-md p-3 flex items-center justify-between cursor-pointer ${checked ? 'checked' : ''} ${className} label-class`}>
                <div className="flex items-center"> {/* Left aligned icon */}
                    {icon && <FontAwesomeIcon icon={icon} />} 
                    <span className="ml-5 word-wrap-text">
                    {optionWords.map((word, index) => (
                        <span key={index}>
                        {word} {index < optionWords.length - 1 && ' '}
                        </span>
                    ))}
                    </span>
                </div>
                <input
                    type="radio"
                    name="description"
                    value={value}
                    className="form-radio opacity-0"  /* Make radio button visually hidden */
                    checked={checked}
                    onChange={onChange} 
                    style={{ color: 'black' }}
                />
                <span className="ml-2" >
                    <i className={`fas ${icon} mr-2`}></i>
                    <span className="text-sm">{children}</span>
                </span>
            </label>
        </div>
    );
}

export default FormRadioOption;
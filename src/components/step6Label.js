import React from 'react';

function Step6Label({ optionText, icon, showImage, showMostPopular, checked, className, onChange, value }) {
    const handleLabelClick = () => {
        onChange({ target: { value } });
      };

    return (
        <div className="label-container2 align-items">
            <label className={`border rounded-md p-3 mb-5 ml-5 flex items-center justify-between cursor-pointer ${checked ? 'checked' : ''} ${className}`} style={{ height: 'auto', width: '400px' }} onClick={handleLabelClick}>
                <div className="flex items-center">
                    {icon && <i className={`fas ${icon} text-2xl`}></i>}
                    <span className="ml-2" style={{ whiteSpace: 'pre-wrap' }}>{optionText}</span>
                </div>
                <input
                    type="radio"
                    name="description"
                    value={optionText}
                    className="form-radio opacity-0"
                    checked={checked}
                    onChange={onChange}
                    style={{ color: 'black' }}
                />
                {showMostPopular && (
                    <span 
                        className="text-balck-500 most-popular-label left-aligned " style={{ fontSize: '0.70rem'}}> 
                        <span style={{ margin: '0.5rem'}}><b>MOST POPULAR</b></span>
                    </span>
                )}
                {showImage && (
                    <div className="radio-option-image">
                        <img src="https://media.istockphoto.com/id/985124698/vector/education-pencil-tree-concept-for-school-learning.jpg?s=612x612&w=0&k=20&c=eUCG0IEMybtMXNasGgA1KGPH4sQ1yEcbxRM4tC6mE24=" alt='' />
                    </div>
                )}
            </label>
        </div>
    );
}

export default Step6Label;
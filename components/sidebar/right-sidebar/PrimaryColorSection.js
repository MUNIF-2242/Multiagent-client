import React, { useContext, useState, useEffect } from 'react';
import { DigiContext } from '../../../context/DigiContext';

const PrimaryColorSection = () => {
    const colorList = [
        {id:1,color:'blue'},
        {id:2,color:'orange'},
        {id:3,color:'pink'},
        {id:4,color:'eagle_green'},
        {id:5,color:'purple'},
        {id:6,color:'gold'},
        {id:7,color:'green'},
        {id:8,color:'deep_pink'},
        {id:9,color:'tea_green'},
        {id:10,color:'yellow_green'},
    ];

    const {
        handleRightSideDropdownToggle,
        rightSideDropdown,
        primaryColor,
        handleColorSelectionToggle,
        setPrimaryColor
      } = useContext(DigiContext);
    
      const [showBackgroundBox, setShowBackgroundBox] = useState(rightSideDropdown.primaryColor);
    
      useEffect(() => {
        // Load primaryColor from local storage if available
        const storedPrimaryColor = localStorage.getItem('primaryColor');
        if (storedPrimaryColor) {
          setPrimaryColor(JSON.parse(storedPrimaryColor));
        }
      }, []);
    
      const handleToggle = () => {
        handleRightSideDropdownToggle('primaryColor');
        setShowBackgroundBox((prevState) => !prevState);
      };

    return (
        <div className="right-sidebar-group">
            <span className="sidebar-subtitle">
                Primary Color{' '}
                <span>
                    <i
                        className={`fa-light ${rightSideDropdown.primaryColor ? 'fa-angle-up' : 'fa-angle-down'}`}
                        role="button"
                        onClick={handleToggle}
                    ></i>
                </span>
            </span>
            <div className={`settings-row-2 ${showBackgroundBox ? 'show' : 'hide'}`}>
                {colorList.map((color) => (
                    <button
                        key={color.id}
                        className={`color-palette color-palette-${color.id} ${primaryColor[color.color] ? 'active' : ''}`}
                        onClick={() => handleColorSelectionToggle(color.color)}
                    >
                        {[...Array(4)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PrimaryColorSection;

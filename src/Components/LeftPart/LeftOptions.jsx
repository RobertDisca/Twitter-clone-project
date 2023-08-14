import React from 'react';
import './LeftOptions.css';

function LeftOptions({ text, Icon, isActive, onClick, iconName }) {
    const handleIconClick = () => {
        onClick(iconName);
    };

    return (
        <div>
            <div
                className={`leftOptions ${isActive ? 'leftOptions--active' : ''}`}
                onClick={handleIconClick}
            >
                <Icon />
                <p>{text}</p>
            </div>
        </div>
    );
}

export default LeftOptions;

document.documentElement.style.setProperty('--twitter-color', '#2F8DD8');
document.documentElement.style.setProperty('--twitter-hover', '#E6E7E8');
document.documentElement.style.setProperty('--twitter-background', '#EFF3F4');

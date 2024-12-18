import React, { useState } from 'react';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="flex items-center">
            <div
                className={`relative inline-block w-12 h-6 ${isOn ? 'bg-blue-400' : 'bg-gray-300'} rounded-full transition`}
                onClick={handleToggle}
            >
                <span 
                    className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isOn ? 'transform translate-x-full' : ''}`}
                />
            </div>
        </div>
    );
};

export default ToggleSwitch;

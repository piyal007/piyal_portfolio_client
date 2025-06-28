import React from 'react';

const Loading = ({ size = 'default', className = '' }) => {
    const sizeClasses = {
        small: 'h-6 w-6',
        default: 'h-12 w-12',
        large: 'h-16 w-16'
    };

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <span className={`loader ${sizeClasses[size] || sizeClasses.default}`}></span>
        </div>
    );
};

export default Loading; 
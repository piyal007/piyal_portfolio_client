import React from 'react';

const CustomLoader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#003153',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{ textAlign: 'center' }}>
        <div className="custom_loader"></div>
        <p style={{ color: 'white', marginTop: '20px', fontSize: '18px' }}>
        </p>
      </div>
    </div>
  );
};

export default CustomLoader; 
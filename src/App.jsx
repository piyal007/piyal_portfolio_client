import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import CustomLoader from './Components/CustomLoader/CustomLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading spinner for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;

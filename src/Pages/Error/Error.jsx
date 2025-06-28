import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#003153] text-white p-4">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-[#FF3D00]">404</h1>
                <h2 className="text-4xl font-semibold">Page Not Found</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <button 
                    onClick={() => navigate('/')} 
                    className="btn bg-[#FF3D00] hover:bg-[#FF3D00]/80 text-white border-none gap-2"
                >
                    <Home size={20} />
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default Error;
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const CopyToClipboard = ({ text, className = "" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e) => {
        // Prevent parent click handlers (like cards) from firing
        e?.stopPropagation?.();
        e?.preventDefault?.();
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            toast.success('Copied to clipboard!');
            
            // Reset the icon after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            toast.error('Failed to copy to clipboard');
        }
    };

    return (
        <button
            onClick={handleCopy}
            onMouseDown={(e) => { e.stopPropagation(); }}
            className={`p-2 hover:bg-gray-700 rounded-lg transition-all duration-200 ${className}`}
            title="Copy to clipboard"
        >
            {copied ? (
                <Check size={16} className="text-green-500" />
            ) : (
                <Copy size={16} className="text-gray-400 hover:text-[#FF3D00] transition-colors" />
            )}
        </button>
    );
};

export default CopyToClipboard; 
import React from 'react';

const Popup = ({ isOpen, closePopup, result }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div 
                className="fixed inset-0 bg-gray-800 opacity-50" 
                onClick={closePopup}
            />
            <div className="relative bg-black rounded-lg shadow-lg py-8 px-4 w-1/3">
                <button
                    className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
                    onClick={closePopup}
                >
                    X
                </button>

                <p className="text-white text-center font-bold text-xl">
                    "{result}" is Winner!
                </p>
            </div>
        </div>
    );
};

export default Popup;
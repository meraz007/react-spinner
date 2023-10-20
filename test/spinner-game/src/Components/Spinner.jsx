import Popup from "./Popup";
import React, { useState } from "react";

function Spinner() {
    const [result, setResult] = useState('')
    const [spinning, setSpinning] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const options = ["Rifat", "Miraj", "Saiful", "Zihan", "Farhan"];

    const closePopup = () => {
        setPopupOpen(false);
    };

    const spin = () => {
        setSpinning(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * options.length);
            setResult(options[randomIndex])
            setPopupOpen(true);
            setSpinning(false);
        }, 3000);
    };

    return (
        <>
            <div className="text-center flex justify-center items-center h-screen">
                <div className="flex flex-col">
                    <button 
                        onClick={spin}
                        className="bg-blue-600 rounded py-2 px-12 text-white"
                    >
                        Spin It!
                    </button>

                    {spinning && (
                        <div className="relative flex items-center justify-center h-full">
                            <div className="absolute top-10 animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    )}
                </div>
            </div>

            <Popup result={result} isOpen={isPopupOpen} closePopup={closePopup} />
        </>
    );
}

export default Spinner;
import Popup from "./Popup";
import React, { useState,Component  } from "react";
import WheelComponent from 'react-wheel-of-prizes'

function Spinner() {
    const [result, setResult] = useState(null)
    const [isPopupOpen, setPopupOpen] = useState(false);

    const segments = [
        'Saiful',
        'Rimon',
        'Miraz',
        'Farhan',
        'Fardin',
    ];

    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
    ];

    const onFinished = (winner) => {
        console.log(winner)

        setTimeout(() => {
            setResult(winner)
            setPopupOpen(true);
        }, 1000);
    }
   
    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <>
        <div className={`flex justify-center mt-20 ${isPopupOpen===true ? 'hidden': ''}`}>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
                fontFamily='Arial'
            />
        </div>

        <Popup result={result} isOpen={isPopupOpen} closePopup={closePopup} />
        </>
    );
}

export default Spinner;
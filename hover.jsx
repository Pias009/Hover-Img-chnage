
import React from 'react';
import '../Hover/ig.css';

const ImageColumns = () => {
    const images = [
        'public/images/img_rectangle12.png',
        'public/images/img_rectangle14.png',
        'public/images/img_rectangle13.png',


    ];

    const handleHover = (colNumber) => {
        const container = document.getElementById(`container-${colNumber}`);
        container.classList.toggle('hidden', false);

        for (let i = 1; i <= 5; i++) {
            if (i !== colNumber) {
                document.getElementById(`container-${i}`).classList.toggle('hidden', true);
            }
        }
    };

    const handleLeave = () => {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`container-${i}`).classList.toggle('hidden', true);
        }
    };

    return (
        <div className="flex-row">
            {[1, 2, 3,].map((colNumber) => (
                <div
                    key={colNumber}
                    className={`column column-${colNumber} flex text-center h-20 w-full`}
                    onMouseEnter={() => handleHover(colNumber)}
                    onMouseLeave={handleLeave}
                >
                    <img className="w-01 h-10" src={images[colNumber - 1]} alt={`Image ${colNumber}`} /> text
                </div>
            ))}

            {[1, 2, 3, 4, 5].map((colNumber) => (
                <div
                    key={colNumber}
                    id={`container-${colNumber}`}
                    className="hidden fixed inset-0 flex items-center justify-center"
                >
                    <div className="w-1/2 bg-white p-4 rounded-lg">
                        <img className="w-[400px] h-[300px]" src={images[colNumber - 1]} alt={`Image ${colNumber}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageColumns;

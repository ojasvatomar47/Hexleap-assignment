"use client"
import { useState } from 'react';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    return (
        <div className="flex items-center justify-between w-full">
            {/* Previous Button */}
            <div
                className="flex items-center justify-center w-1/6 h-12 bg-gray-200 cursor-pointer"
                onClick={handlePrev}
            >
                &lt;
            </div>

            {/* Middle Content Container */}
            <div className="flex-grow h-12 overflow-hidden relative">
                <div className="flex absolute inset-0">
                    <p className="flex items-center justify-center h-full w-1/2">
                        {texts[activeIndex]}
                    </p>
                    <p className="flex items-center justify-center h-full w-1/2">
                        {texts[(activeIndex + 1) % texts.length]}
                    </p>
                </div>
            </div>

            {/* Next Button */}
            <div
                className="flex items-center justify-center w-1/6 h-12 bg-gray-200 cursor-pointer"
                onClick={handleNext}
            >
                &gt;
            </div>
        </div>
    );
};

export default Carousel;

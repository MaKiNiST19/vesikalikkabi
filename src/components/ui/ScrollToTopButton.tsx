"use client";

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const calculateScrollProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            toggleVisibility();
            calculateScrollProgress();
        });
        return () => window.removeEventListener("scroll", () => {
            toggleVisibility();
            calculateScrollProgress();
        });
    }, []);

    // Stroke dasharray calculation for the circle
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;


    return (
        <>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-[90px] right-6 z-[9998] cursor-pointer group animate-fade-in transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg rounded-full"
                >
                    <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                        {/* Circular Progress SVG Background */}
                        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                            <circle
                                className="text-gray-200 shadow-xl"
                                strokeWidth="3"
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="26"
                                cy="26"
                            />
                            {/* Circular Progress Indicator */}
                            <circle
                                className="text-blue-600 transition-all duration-300"
                                strokeWidth="3"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="26"
                                cy="26"
                            />
                        </svg>

                        {/* Button Content */}
                        <div className="bg-white rounded-full w-10 h-10 flex flex-col items-center justify-center shadow-md z-10 transition-colors group-hover:bg-blue-50">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;

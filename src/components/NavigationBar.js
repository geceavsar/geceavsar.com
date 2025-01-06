import React from "react";

const NavigationBar = ({ language }) => {
    return (
        <nav className="flex justify-center space-x-6 mt-6 text-gray-600 fade-in-2s">
            {language === 'en' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <span>|</span>
                    <a href="/" className="hover:text-blue-500 transition">home</a>
                </>
            )}
            {language === 'tr' && (
                <>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                    <span>|</span>
                    <a href="/" className="hover:text-blue-500 transition">ana sayfa</a>
                </>
            )}
            {language === 'multi' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <span>|</span>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                </>
            )}
        </nav>
    );
};

export default NavigationBar;

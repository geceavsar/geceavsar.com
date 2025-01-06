import React from "react";

const NavigationBar = ({ language }) => {
    return (
        <nav className="flex justify-center space-x-6 mt-6 text-gray-600 fade-in-2s">
            {language === 'en' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <a href="/" className="hover:text-blue-500 transition">back</a>
                </>
            )}
            {language === 'tr' && (
                <>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                    <a href="/" className="hover:text-blue-500 transition">geri</a>
                </>
            )}
            {language === 'multi' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                </>
            )}
        </nav>
    );
};

export default NavigationBar;

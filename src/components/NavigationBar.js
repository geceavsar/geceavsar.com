import React from "react";

const NavigationBar = ({ barType }) => {
    return (
        <nav className="flex justify-center space-x-6 mt-6 text-gray-500 fade-in-2s">
            {barType === 'en' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <span>|</span>
                    <a href="/" className="hover:text-blue-500 transition">home</a>
                    <span>|</span>
                    <a href="/blog" className="hover:text-blue-500 transition">blog</a>
                </>
            )}
            {barType === 'tr' && (
                <>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                    <span>|</span>
                    <a href="/" className="hover:text-blue-500 transition">ana sayfa</a>
                    <span>|</span>
                    <a href="/blog" className="hover:text-blue-500 transition">blog</a>
                </>
            )}
            {barType === 'multi' && (
                <>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                    <span>|</span>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                    <span>|</span>
                    <a href="/blog" className="hover:text-blue-500 transition">blog</a>
                </>
            )}
            {barType === 'blog' && (
                <>
                    <a href="/" className="hover:text-blue-500 transition">home</a>
                    <span>|</span>
                    <a href="/en" className="hover:text-blue-500 transition">en</a>
                    <span>|</span>
                    <a href="/tr" className="hover:text-blue-500 transition">tr</a>
                </>
            )}
        </nav>
    );
};

export default NavigationBar;

import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({ barType }) => {
    return (
        <nav className="flex justify-center space-x-6 mt-6 text-gray-500 fade-in-2s">
            {barType === 'en' && (
                <>
                    <Link to="/tr" className="hover:text-blue-500 transition">tr</Link>
                    <span>|</span>
                    <Link to="/" className="hover:text-blue-500 transition">home</Link>
                    <span>|</span>
                    <Link to="/blog" className="hover:text-blue-500 transition">blog</Link>
                </>
            )}
            {barType === 'tr' && (
                <>
                    <Link to="/en" className="hover:text-blue-500 transition">en</Link>
                    <span>|</span>
                    <Link to="/" className="hover:text-blue-500 transition">ana sayfa</Link>
                    <span>|</span>
                    <Link to="/blog" className="hover:text-blue-500 transition">blog</Link>
                </>
            )}
            {barType === 'multi' && (
                <>
                    <Link to="/tr" className="hover:text-blue-500 transition">tr</Link>
                    <span>|</span>
                    <Link to="/en" className="hover:text-blue-500 transition">en</Link>
                    <span>|</span>
                    <Link to="/blog" className="hover:text-blue-500 transition">blog</Link>
                </>
            )}
            {barType === 'blog' && (
                <>
                    <Link to="/" className="hover:text-blue-500 transition">home</Link>
                    <span>|</span>
                    <Link to="/en" className="hover:text-blue-500 transition">en</Link>
                    <span>|</span>
                    <Link to="/tr" className="hover:text-blue-500 transition">tr</Link>
                </>
            )}
        </nav>
    );
};

export default NavigationBar;

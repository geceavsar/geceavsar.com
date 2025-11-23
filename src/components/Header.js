import React from "react";
import Navigation from "./NavigationBar";
import SocialMedia from "./SocialMedia";

const Header = ({barType}) => {
    return (
        <header className="w-full text-center py-6 fade-in-2s">
            <h1 className="text-5xl text-gray-800 dark:text-white dark:opacity-70 mb-2">Gizem Ece Avşar</h1>
            <SocialMedia />
            <Navigation barType={barType} />
        </header>
    );
};

export default Header;

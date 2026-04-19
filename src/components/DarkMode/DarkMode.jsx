import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            document.querySelector("body").setAttribute("data-theme", "dark");
            setIsDark(true);
        }

        const handleThemeSync = (e) => {
            setIsDark(e.detail === 'dark');
        };
        window.addEventListener('theme-sync', handleThemeSync);
        
        return () => window.removeEventListener('theme-sync', handleThemeSync);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        document.querySelector("body").setAttribute("data-theme", newTheme);
        localStorage.setItem("selectedTheme", newTheme);
        setIsDark(!isDark);
        window.dispatchEvent(new CustomEvent('theme-sync', { detail: newTheme }));
    };

    return (
        <button 
            className='dark_mode_btn' 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
        >
            {/* The magic happens right here: */}
            {isDark ? <Sun className="theme-icon sun-icon" /> : <Moon className="theme-icon moon-icon" />}
        </button>
    );
};

export default DarkMode;
import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    // 1. Logic to apply the theme
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };

    // 2. Load the saved theme on startup
    useEffect(() => {
        const selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === "dark") {
            setDarkMode();
            // Check the checkbox visually
            document.querySelector("#darkmode-toggle").checked = true;
        }
    }, []);

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun className="sun" />
                <Moon className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;
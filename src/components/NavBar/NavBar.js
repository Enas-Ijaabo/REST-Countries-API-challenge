import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './NavBar.css'

const NavBar = (props) => {

    const {switchDarkMode, darkModeOn} = useContext(DarkModeContext);

    return (
        <div className={`navbar ${darkModeOn? 'dark-mode': ''}`}>
            <div className="page-name">Where in the world?</div>
            <div className="dark-mode-button" onClick={() => switchDarkMode(!darkModeOn)}>
                <div className="moon"></div>
                <div className="dark-mode-text"> Dark Mode</div>
            </div>
        </div>
    )
}

export default NavBar;
import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './NavBar.scss'
import icon from '../../assets/moon-regular.svg';

const NavBar = (props) => {

    const {switchDarkMode, darkModeOn} = useContext(DarkModeContext);

    return (
        <div className={`navbar ${darkModeOn? 'dark-mode': ''}`}>
            <div className="page-name">Where in the world?</div>
            <div className="dark-mode-button" onClick={() => switchDarkMode(!darkModeOn)}>
                <img className="moon" src={icon} alt=''/>
                <div className="dark-mode-text"> Dark Mode</div>
            </div>
        </div>
    )
}

export default NavBar;
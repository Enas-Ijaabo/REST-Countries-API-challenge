import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './NavBar.scss'
import icon from '../../assets/moon-regular.svg';

const NavBar = (props) => {

    const {switchDarkMode, darkModeOn} = useContext(DarkModeContext);

    const switchDarkModeHandler = ()=>{
        switchDarkMode(!darkModeOn);
        document.body.classList.toggle('dark-mode');
    }

    return (
        <div className={`navbar ${darkModeOn? 'dark-mode': ''}`}>
            <div className="page-name">Where in the world?</div>
            <div className="dark-mode-button" onClick={() => switchDarkModeHandler()}>
                <img className="moon" src={icon} alt=''/>
                <div className="dark-mode-text"> Dark Mode</div>
            </div>
        </div>
    )
}

export default NavBar;
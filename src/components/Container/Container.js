import React, { useCallback, useState, useContext } from 'react';
import './Container.scss';
import SearchBar from '../SearchBar/SearchBar';
import DisplayBox from '../DisplayBox/DisplayBox';
import { DarkModeContext } from '../../context/DarkModeContext';

const Container = (props) => {

    const {darkModeOn} = useContext(DarkModeContext);
    const [region, setRegion] = useState('');
    const getSelectedRegion = useCallback((selectedRegion) => {
        setRegion(selectedRegion);
    },
        []);

    const [countryName, setCountryName] = useState('');
    const getCountryName = useCallback((selectedName) => {
        setCountryName(selectedName);
    },
        []);

    return (
        <div className={`container ${darkModeOn? 'dark-mode': ''}`}>
            <SearchBar region={getSelectedRegion} countryname={getCountryName}></SearchBar>
            <DisplayBox region={region} countryname={countryName} />
        </div>
    )
}

export default Container;


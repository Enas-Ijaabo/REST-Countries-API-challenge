import React, { useCallback, useState } from 'react';
import './Container.css';
import SearchBar from '../SearchBar/SearchBar';
import DisplayBox from '../DisplayBox/DisplayBox';

const Container = (props) => {
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
        <div className="container">
            <SearchBar region={getSelectedRegion} countryname={getCountryName}></SearchBar>
            <DisplayBox region={region} countryname={countryName} />
        </div>
    )
}

export default Container;


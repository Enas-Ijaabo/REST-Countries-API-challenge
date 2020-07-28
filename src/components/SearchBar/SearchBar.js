import React, { useCallback, useContext } from 'react';
import FilterByRegion from './FilterByRegion/FilterByRegion'
import Search from './Search/Search';
import './SearchBar.css'
import { DarkModeContext } from '../../context/DarkModeContext';

const SearchBar = (props) => {

    const {darkModeOn} = useContext(DarkModeContext);
    const getSelectedRegion = useCallback((selectedRegion) => {
        props.region(selectedRegion);
    },
        [props]);

    const getSelectedName = useCallback((selectedName) => {
        props.countryname(selectedName);
    },
        [props]);


    return (
        <div className={`search-bar ${darkModeOn? 'dark-mode': ''}`}>
                <Search selectedname={getSelectedName} />
                <FilterByRegion selectedregiondata={getSelectedRegion} />
        </div>
    )
}

export default SearchBar;
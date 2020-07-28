import React, { useContext } from 'react';
import './FilterByRegion.css';
import DarkModeContext from '../../../context/DarkModeContext';

const FilterByRegion = (props) => {

    //const {darkModeOn} = useContext(DarkModeContext);

    const sendRegion = (SelectedRegion) => {
        props.selectedregiondata(SelectedRegion);
    }

    const selectRegionHandler = (event) => {
        const newSelectedRegion = event.target.value;
        sendRegion(newSelectedRegion);
    }

    return (
        <select onChange={selectRegionHandler} defaultValue="" className={`region-selector`} >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default FilterByRegion;
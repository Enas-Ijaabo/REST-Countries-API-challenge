import React from 'react';
import icon from '../../../assets/icons8-search.svg';
import './Search.scss';
const Search = (props) => {

   //const {darkModeOn} = useContext(DarkModeContext);

    const sendName = (SelectedName) => {
        props.selectedname(SelectedName);
    }

    const countryNameHandler = (event)=>{
        const text= event.target.value;
        sendName(text);
    }

    return (
       <div className={`search`}>
           <img src={icon} alt='search'/>
           <input type='text' onChange={countryNameHandler} placeholder='Search for a country...'></input>
       </div>
    )
}

export default Search;
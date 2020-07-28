import React, { useContext } from 'react';
import DarkModeContext from '../../../context/DarkModeContext';
import './DisplayCard.css'

const DisplayCard = (props) => {
    //const {darkModeOn} = useContext(DarkModeContext);
    return (
        <div className={`display-card`} >
            <img className="flag" src={props.flag} alt={props.countryName}/>
            <div className='country-name'>{props.countryName}</div>
            <div> <div className='title'>Population: </div><div className='value'>{props.population}</div></div>
            <div> <div className='title'>Region: </div><div className='value'>{props.region}</div></div>
            <div> <div className='title'>Capital: </div><div className='value'>{props.capital}</div></div>
        </div>
    )
}

export default DisplayCard;
import React from 'react';
import './DisplayCard.scss'

const DisplayCard = (props) => {

    return (
        <div className={`display-card`}>
        <img className="flag" src={props.flag} alt={props.countryName} />
        <div className='country-name'>{props.countryName}</div>
        <div> <div className='title'>Population: </div><div className='value'>{props.population}</div></div>
        <div> <div className='title'>Region: </div><div className='value'>{props.region}</div></div>
        <div> <div className='title'>Capital: </div><div className='value'>{props.capital}</div></div>
    </div>
      
    )
}

export default DisplayCard;
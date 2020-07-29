import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CountryDisplay.css'
import { DarkModeContext } from '../../context/DarkModeContext';
const CountryDisplay = (props) => {
  
    const { darkModeOn } = useContext(DarkModeContext);
    const {
        countryName,
        nativeName,
        region,
        capital,
        population,
        subRegion,
        topLevelDomain,
        currencies,
        languages,
        borderCountries,
        flagPicUrl
    } = props.location.state

    return (
        <div className={`country-display ${darkModeOn ? 'dark-mode' : ''}`}>
            <Link className='back-button' to='/'> {'← Back'}</Link>
            <div className='box'>
                <img className="flag" src={flagPicUrl} alt={countryName} />
                <div className='country-info-display'>
                    <div className='country-name'>{countryName}</div>
                    <div> <div className='title'>Native Name: </div><div className='value'>{nativeName}</div></div>
                    <div> <div className='title'>Population: </div><div className='value'>{population}</div></div>
                    <div> <div className='title'>Region: </div><div className='value'>{region}</div></div>
                    <div> <div className='title'>sub Region: </div><div className='value'>{subRegion}</div></div>
                    <div> <div className='title'>Capital: </div><div className='value'>{capital}</div></div>
                </div>
                <div className='country-info-display'>
                    <div> <div className='title'>Top Level Domain: </div><div className='value'>{topLevelDomain}</div></div>
                    <div> <div className='title'>currencies: </div><div className='value'>{
                        currencies.map((currency) => {
                            return currency.name;
                        })
                    }</div></div>
                    <div> <div className='title'>languages: </div><div className='value'>{
                        languages.map((language) => {
                            return language.name + ' ';
                        })}</div></div>
                </div>
            </div>
            <div className='border-countries'> <div className='title'>Border Countries: </div><div className='value'>{
                borderCountries.map((country) => {
                    return (
                        <Link to={`country/:${country}`}>{country}</Link>
                    );
                })
            }</div></div>
        </div>
    )
}

export default CountryDisplay;
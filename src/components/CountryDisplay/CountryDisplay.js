import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CountryDisplay.scss'
import { DarkModeContext } from '../../context/DarkModeContext';
const CountryDisplay = (props) => {

    const countryName = props.match.params.countryName;
    const [country, setCountry] = useState({});
    const [borderCountries, setBorderCountries] = useState([])
    const { darkModeOn } = useContext(DarkModeContext);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}?fields=name;nativeName;region;capital;population;subregion;topLevelDomain;currencies;languages;borders;flag`;

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((countriesArray) => {
                setCountry(countriesArray[0]);
            }).catch(error => {

            })

    }, [countryName]);

    useEffect(() => {

        if (country.borders) {

            const getBorderCountry = async code => {
                const response = await fetch(
                    `https://restcountries.eu/rest/v2/alpha/${code}?fields=name`
                );
                return await response.json();
            };

            const getBorderCountries = borders => {
                return borders.map(async border => {
                    return await getBorderCountry(border);
                });
            };

            Promise.all(
                getBorderCountries(country.borders)).then( countries => {
                 setBorderCountries( countries.map(borderCountry => borderCountry.name));
                }
            );

        }
    }, [country]);


    return (
        <div className={`country-display ${darkModeOn ? 'dark-mode' : ''}`}>
            <Link className='back-button' to='/'> {'← Back'}</Link>
            <div className='box'>
                <div className="flag" style={{backgroundImage: `url(${country.flag})` }} />
                <div className='country-info'>
                    <div className='country-info-display'>
                        <div className='country-info-display1'>
                            <div className='country-name'>{countryName}</div>
                            <div> <div className='title'>Native Name: </div><div className='value'>{country.nativeName}</div></div>
                            <div> <div className='title'>Population: </div><div className='value'>{country.population}</div></div>
                            <div> <div className='title'>Region: </div><div className='value'>{country.region}</div></div>
                            <div> <div className='title'>sub Region: </div><div className='value'>{country.subregion}</div></div>
                            <div> <div className='title'>Capital: </div><div className='value'>{country.capital}</div></div>
                        </div>
                        <div className='country-info-display1'>
                            <div> <div className='title'>Top Level Domain: </div><div className='value'>{country.topLevelDomain}</div></div>
                            <div> <div className='title'>currencies: </div><div className='value'>{
                                country.currencies ? country.currencies.map((currency) => {
                                    return currency.name;
                                }) : ''
                            }</div></div>
                            <div> <div className='title'>languages: </div><div className='value'>{
                                country.languages ? country.languages.map((language) => {
                                    return language.name + ' ';
                                }) : ''
                            }</div></div>
                        </div>
                    </div>
                    <div className='border-countries'> <div className='title'>Border Countries: </div><div className='value'>{
                        borderCountries ? borderCountries.map((borderCountry) => {
                            return (
                                <Link key={borderCountry + '-border'} to={`/country/${borderCountry}`}>{borderCountry}</Link>
                            );
                        }) : ''
                    }</div></div>
                </div>

            </div>
        </div>
    )
}

export default CountryDisplay;
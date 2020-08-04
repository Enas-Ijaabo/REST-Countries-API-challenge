import React, { useEffect, useState, useContext } from 'react';
import DisplayCard from './DisplayCard/DisplayCard';
import './DisplayBox.scss';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Link } from 'react-router-dom';

const DisplayBox = (props) => {

    const { darkModeOn } = useContext(DarkModeContext);

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        let url;
        if (props.region !== '' && props.countryname === '') {
            url = `https://restcountries.eu/rest/v2/region/${props.region}?fields=name;region;capital;population;flag`;
        } else if (props.countryname !== '' && props.region === '') {
            url = `https://restcountries.eu/rest/v2/name/${props.countryname}?fields=name;region;capital;population;flag`;
        } else {
            url = 'https://restcountries.eu/rest/v2/all?fields=name;region;capital;population;flag';
        }

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((countryArray) => {
                if (props.region !== '' && props.countryname !== '') {
                    const filteredCountryArray = countryArray.filter((country) => {
                        return country.region === props.region && country.name === props.countryname;

                    })

                    setCountries(filteredCountryArray);
                } else {
                    setCountries(countryArray);
                }
            }).catch(error => {

            })

    }, [props.region, props.countryname]);

    // const [hasError, setErrors]=  useState(false);

    return (

        <div className={`display-box ${darkModeOn ? 'dark-mode' : ''}`}>
            {countries.length>=1? countries.map((country) => {
                return <Link key={country.name+'display card'} to={{
                    pathname: `/country/${country.name}`
                }}>
                    <DisplayCard key={country.name} countryName={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />
                </Link>
            }): ''
            }
        </div>
    )
}

export default DisplayBox;
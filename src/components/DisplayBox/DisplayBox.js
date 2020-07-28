import React, { useEffect, useState, useContext } from 'react';
import DisplayCard from './DisplayCard/DisplayCard';
import './DisplayBox.css';
import { DarkModeContext } from '../../context/DarkModeContext';

const DisplayBox = (props) => {

    const {darkModeOn} = useContext(DarkModeContext);

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        let url;
        if (props.region !== '' && props.countryname === '') {
            url = `https://restcountries.eu/rest/v2/region/${props.region}`;
        } else if (props.countryname !== '' && props.region === '') {
            url = `https://restcountries.eu/rest/v2/name/${props.countryname}`;
        } else {
            url = 'https://restcountries.eu/rest/v2/all';
        }

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {

                const countryArray = [];
                for (let i = 0; i < responseData.length; i++) {
                    const nesData = {
                        name: responseData[i].name,
                        nativeName: responseData[i].nativeName,
                        region: responseData[i].region,
                        capital: responseData[i].capital,
                        population: responseData[i].population,
                        subRegion: responseData[i].subregion,
                        topLevelDomain: responseData[i].topLevelDomain,
                        currencies: responseData[i].currencies,
                        languages: responseData[i].languages,
                        borderCountries: responseData[i].borders,
                        flagPicUrl: responseData[i].flag
                    }
                    countryArray.push(nesData);
                }
                return countryArray;
            }).then((countryArray) => {
                if (props.region !== '' && props.countryname !== '') {
                    const filteredCountryArray = countryArray.filter((country) => {
                        return country.region === props.region && country.name === props.countryname;
   
                    })
                    console.log(filteredCountryArray);
                    

                    setCountries(filteredCountryArray);
                } else {
                    setCountries(countryArray);
                }
            }).catch(error => {

            })

    }, [props.region, props.countryname]);

    // const [hasError, setErrors]=  useState(false);

    return (
        <div className={`display-box ${darkModeOn? 'dark-mode': ''}`}>
            {countries.map((country) => {
                return <DisplayCard key={country.name} countryName={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flagPicUrl} />
            })
            }
        </div>
    )
}

export default DisplayBox;
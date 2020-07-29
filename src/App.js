import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import DarkModeContextProvider from './context/DarkModeContext';
import { Route } from 'react-router-dom';
import CountryDisplay from './components/CountryDisplay/CountryDisplay';

function App() {

  return (
    <div className="App">
      <DarkModeContextProvider>
        <NavBar/>
        <Route exact path='/' component= {Container} />
        <Route path='/country/:countryName'  component= {CountryDisplay}/>
      </DarkModeContextProvider>
    </div>
  );
}

export default App;

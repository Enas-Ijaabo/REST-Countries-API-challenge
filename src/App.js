import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import DarkModeContextProvider from './context/DarkModeContext';

function App() {

  return (
    <div className="App">
      <DarkModeContextProvider>
        <NavBar/>
        <Container/>
      </DarkModeContextProvider>

    </div>
  );
}

export default App;

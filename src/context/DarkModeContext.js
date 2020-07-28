import React, {createContext, useState} from 'react';

export const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {
    const [darkModeOn, switchDarkMode] = useState(false);

    return (
        <DarkModeContext.Provider value={{darkModeOn, switchDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider;
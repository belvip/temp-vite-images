import  { createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('prefer-color-scheme:dark').matches;
    {/*console.log(prefersDarkMode);
    console.log(localStorage.getItem('darkTheme')); */} 
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
    return storedDarkMode || prefersDarkMode;
}

export const AppProvider = ({children}) =>{
    {/*const greeting = 'Hello';*/}

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('cat');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
        {/*const body = document.querySelector('body');
        console.log(body);
        body.classList.toggle('dark-theme', newDarkTheme);*/} 
        
    }

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    );

};

export const useGlobalContext = () => useContext(AppContext);
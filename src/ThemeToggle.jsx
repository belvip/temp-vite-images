import React from 'react';
import { useGlobalContext } from './context';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';



function ThemeToggle() {
    {/*const { greeting }  = useGlobalContext(); console.log(greeting);*/}
    const { isDarkTheme, toggleDarkTheme} = useGlobalContext();
    
    return (

        <section className='toggle-container'>

            <button className='dark-toggle'  onClick={toggleDarkTheme}>
                
                {isDarkTheme ? (
                    <LightModeIcon className='toggle-icon'/>

                ) : 
                (
                    <NightlightIcon  className='toggle-icon' />
                )}

            </button>

        </section>
    )
}

export default ThemeToggle
//utility function to toggle theme between light and dark

import { theme } from "../types/theme";
import { getTheme, setTheme } from "./localStorageUtil"

export const toggleTheme = () => {
     const current:theme = getTheme();
     if( current === "light"){
        setTheme('dark');
        document.documentElement.setAttribute('dark-theme','dark');
     } else{
        setTheme('light');
        document.documentElement.removeAttribute('dark-theme');
     }
}
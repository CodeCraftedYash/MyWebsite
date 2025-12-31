import type { theme } from "../types/theme";
const THEME_KEY = 'theme';

//function to retrive theme from local storage
export const getTheme = ():theme => {
    const storedItem = localStorage.getItem(THEME_KEY);
    return storedItem === "dark" ? "dark" : "light";
}

//function to update/create theme from local storage 
export const setTheme = (val:theme) => {
    localStorage.setItem(THEME_KEY,val);
}

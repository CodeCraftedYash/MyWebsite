import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { theme } from "../../types/theme";
import { toggleTheme } from "../../utils/toggleTheme";
import { getTheme } from "../../utils/localStorageUtil";

const ThemeSwitcher = () => {
  const [ light,setLight ] = useState<theme>(getTheme());
  
  const handleClick = () =>{
    setLight( prev => prev === 'light'? 'dark' : 'light' );
    toggleTheme();
  }
  return (
    <div className="" style={{filter:"drop-shadow(0px 0px 2px white)"}}><FaLightbulb className="text-xl hover:scale-120 hover:cursor-pointer transition-all duration-200 ease-in-out" 
    style={{
        color:light === 'light' ? "#3e7599" : "#fff768" 
    }}
    onClick={handleClick}
    /></div>
  )
}

export default ThemeSwitcher
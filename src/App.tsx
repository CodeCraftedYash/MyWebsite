import HomePage from "./pages/HomePage"
import { getTheme } from "./utils/localStorageUtil"

function App() {
    const theme = getTheme();
    if(theme === 'dark')
        document.documentElement.setAttribute('dark-theme','dark');
 return(
  <>
  <HomePage />
  </>
 ) 
}

export default App

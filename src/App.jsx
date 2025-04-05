import React, {useState} from "react";
import { ThemeContext, themes } from "./context/ThemeContext";
import Home from "./components/Home";
import ThemeButton from "./components/ThemeButton";
function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>{
    setTheme(theme => (theme === themes.light ? themes.dark : themes.light))
  }
  return (
    <div >
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {/* <ThemeButton changeTheme={toggleTheme}/> */}
        <Home/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App

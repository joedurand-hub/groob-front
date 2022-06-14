import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () =>{
      setTheme(!theme);
      console.log(theme)
    } 

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider }
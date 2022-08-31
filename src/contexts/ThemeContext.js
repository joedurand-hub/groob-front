import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let data = window.localStorage.getItem("theme");
    if(data) setTheme(JSON.parse(data))
  }, [])

  const toggleTheme = () => {
    if(typeof window !== "undefined") {
      setTheme(!theme)
      window.localStorage.setItem("theme", JSON.stringify(!theme));
      return theme
    }
  };  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
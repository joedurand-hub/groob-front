import { createContext, useState } from "react";

const ThemeContext = createContext()

const initialValue = 'light'

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialValue);
  
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
      console.log('light')
    } else {
        setTheme("dark");
      console.log('dark')

    };
}

  const data = { theme, handleTheme };
  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider }
export default ThemeContext;
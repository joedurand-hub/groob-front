import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

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

// import { createContext, useState } from "react";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     console.log("click:", darkMode)
//   };
//   if (typeof window !== "undefined") {
//     const setThemeInStorage = (darkMode) => {
//       window.localStorage.setItem("theme", darkMode);
//     };
//     setThemeInStorage(darkMode);

//     const getThemeInStorage = () => {
//       window.localStorage.getItem("theme"); // returns 'light' in this case
//     };
//     const theme = getThemeInStorage();

//     return (
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         {children}
//       </ThemeContext.Provider>
//     );
//   }
// };

// export { ThemeContext, ThemeProvider };

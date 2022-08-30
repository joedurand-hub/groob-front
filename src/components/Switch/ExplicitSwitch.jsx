import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../contexts/ThemeContext";

const Index = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Switch
      onChange={handleClick}
      checked={theme}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
    />
  );
};

export default Index;

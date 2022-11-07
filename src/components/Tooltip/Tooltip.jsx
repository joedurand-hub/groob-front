import styles from "./tooltip.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ReactTooltip from "react-tooltip"

const Tooltip = ({ id, place, type, effect, text }) => {
    const {theme} = useContext(ThemeContext)
  return (
    <>
        <ReactTooltip
        id={id}
        place={place}
        type={theme ? "dark" : "light"}
        effect={effect}
        >
            {text}
        </ReactTooltip>
    </>
  );
};

export default Tooltip;

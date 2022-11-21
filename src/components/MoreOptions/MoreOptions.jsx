import styles from "./moreOptions.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useState, useEffect } from "react";
import { AiOutlineMore } from "react-icons/ai";
import Icon from "../PostIcons/Icon";

const MoreOptions = ({
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  postId,
  userId,
  myId,
}) => {
  const { theme } = useContext(ThemeContext);
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <Icon>
        <AiOutlineMore onClick={handleToggle} />
      </Icon>
      <div className={active ? `${styles.menu_open}` : `${styles.menu_close}`}>
        {active && (
          <nav
            className={
              theme
                ? `${styles.menu} ${styles.light}`
                : `${styles.menu} ${styles.dark}`
            }
          >
            <ul className={styles.menu_ul}>
              {userId === myId && (
                <li className={styles.menu_list}>{option1}</li>
              )}
              <li className={theme ? `${styles.menu_list} light_mode` : `${styles.menu_list} dark_mode`}>{option2}</li>
              {/* <li className={styles.menu_list}>{option3}</li> */}
              {/* <li className={styles.menu_list}>{option4}</li> */}
              {/* <li className={styles.menu_list}>{option5}</li> */}
              {/* <li className={styles.menu_list}>{option6}</li> */}
              {/* <li className={styles.menu_list}>{option7}</li> */}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MoreOptions;

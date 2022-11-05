import { IoSend } from "react-icons/io5";
import Icon from "../Icon/Icon";
import styles from "./send.module.css";

const Send = ({ value, submit }) => {
  return (
    <>
      <Icon>
        <IoSend className={value.length > 0 && value.length <= 500 ? styles.send : styles.disabled} onClick={submit} />
      </Icon>
    </>
  );
};

export default Send;

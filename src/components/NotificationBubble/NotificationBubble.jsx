import styles from "./bubble.module.css"
import { MdOutlineNotificationsNone } from "react-icons/md";
import Icon from "../Icon/Icon"

function NotificationBubble({ notifications }) {
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <Icon>
        <MdOutlineNotificationsNone />
      </Icon>
      {notifications ? (
        <div
          className={styles.notification_bubble}
        >
          <p className={styles.notification_number}>
            {notifications > 0 && notifications}
          </p>
        </div>

      ) : null}
    </div>
  );

}

export default NotificationBubble;
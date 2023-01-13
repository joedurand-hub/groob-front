import { useState, useEffect } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Icon from "../Icon/Icon"

function NotificationBubble({ notifications }) {
  console.log("Notifications", notifications)
  const [bubble, setBubble] = useState(false)
  console.log(bubble)
  useEffect(() => {
    if (notifications !== undefined && notifications > 0) {
      setBubble(true)
    }
  }, [notifications])

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <Icon>
        <MdOutlineNotificationsNone />
      </Icon>
      {bubble ? (
        <div
          style={{
            backgroundColor: 'red',
            borderRadius: '50%',
            width: '15px',
            height: '15px',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            position: 'absolute',
            top: '3px',
            right: '5px',
          }}
        >
        </div>

      ) : null}
    </div>
  );

}

export default NotificationBubble;
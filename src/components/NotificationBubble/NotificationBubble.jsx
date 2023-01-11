import { useState, useEffect } from "react";
import Icon from "../Icon/Icon"
import { MdOutlineNotificationsNone } from "react-icons/md";

function NotificationBubble({ notifications }) {
  const [bubble, setBubble] = useState(false)
  
  useEffect(() => {
    if (notifications > 0) {
      setBubble(true)
    }
  }, [])

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
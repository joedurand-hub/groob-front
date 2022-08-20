import React from 'react'

const ChatList = ({list}) => {
  return (
    <div>
        {list.map(chat => (

        <ChatUser prop1={chat.prop} prop2={chat.prop}/>
        ))}
    </div>
  )
}

export default ChatList
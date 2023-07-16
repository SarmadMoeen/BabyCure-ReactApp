import React from 'react'

const MessageChat = ({message,chat_right}) => {
  return (
    <div>
        <div className={`float-left d-flex ${chat_right} `}>
            <p  className='bg-white p-1 px-3 rounded-5' >{message}</p>
        </div>
    </div>
  )
}

export default MessageChat
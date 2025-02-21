import React from 'react'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

 const Chat = () => {
  return (
    <div className='chat min-h-[100vh] bg-gradient-to-r from-[#596AFF] to-[#383699] grid place-items-center'>
       <div className="chat-container w-[95%] h-[75vh] max-w-[1000px] bg--[aliceblue] grid grid-cols-[1fr_2fr_1fr] bg-white">
          <LeftSidebar/>
          <ChatBox/>
          <RightSidebar/>
       </div>
    </div>
  )
}

export default Chat

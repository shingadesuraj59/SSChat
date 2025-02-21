import React from 'react'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box h-[75vh] relative bg-[#f1f5ff]'>
      {/* top part */}
      <div className="chat-user px-4 py-3 flex items-center gap-3 border-b-[1px] border-b-[#c6c6c6]">
        <img className='w-[38px] aspect-[1/1] rounded-[50%]' src={assets.profile1} alt="profile" />
        <p className='flex-1 font-medium text-[20px] text-[#393939] flex gap-[5px] items-center'>Suraj Shingade <img className='w-[15px] rounded-[50%]' src={assets.green_dot} alt="" /></p>
        <img className='w-[25px] rounded-[50%]' src={assets.help_icon} alt="" />
        </div> 

        {/* middle part */}
        <div className='chat-message h-[calc(100%-70px)] pb-[50px] overflow-y-scroll flex flex-col-reverse'>
          <div className="s-message flex items-end gap-[5px] justify-end px-4 py-0 ">
            <p className="msg text-white bg-[#077EFF] p-2 max-w-[200px] text-[13px] font-light rounded-[8px_8px_0px_8px] mb-[30px]">Suraj Ramchandra Shingade</p>
            <div className='text-center text-[11px]'>
              <img className='w-[27px] aspect-[1/1] rounded-[50%]' src={assets.profile1} alt="" />
              <p className=''>12:00</p>
            </div>
          </div>

          <div className="s-message flex items-end gap-[5px] justify-end px-4 py-0 ">
              <img className='msg-image max-w-[230px] mb-[30px] rounded-[10px]' src={assets.pic1} alt="" />
            <div className='text-center text-[11px]'>
              <img className='w-[27px] aspect-[1/1] rounded-[50%]' src={assets.profile1} alt="" />
              <p className=''>12:00</p>
            </div>
          </div>

          <div className="r-message flex gap-[5px] px-4 py-0 items-end  justify-end flex-row-reverse">
            <p className="msg text-white bg-[#077EFF] p-2 max-w-[200px] text-[13px] font-light rounded-[8px_8px_8px_0px] mb-[30px]">Suraj Ramchandra Shingade</p>
            <div className='text-center text-[11px]'>
              <img className='w-[27px] aspect-[1/1] rounded-[50%]' src={assets.profile1} alt="" />
              <p className=''>12:00</p>
            </div>
          </div>
        </div>

        


        {/* //bottom part */}
       <div className="chat-input flex items-center gap-3 px-4 py-3 bg-white absolute bottom-0 left-0 right-0">
        <input className='flex-1 border-0 outline-0' type="text" placeholder='Send a message' />
        <input type="file" id="image" accept='image/png, image/jpeg' hidden/>
        <label className='flex ' htmlFor="image">
          <img className='w-5 cursor-pointer ' src={assets.gallery_icon} alt="" />
        </label>
        <img className='w-7 cursor-pointer' src={assets.send_button} alt="" />
        </div>      
    </div>
  )
}

export default ChatBox
